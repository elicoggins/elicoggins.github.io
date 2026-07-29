// Web audio backend for the browser demo: a ScriptProcessorNode pulls the
// game's own Rust mixer (audio::Mixer, exported as kw_render) for every
// buffer, so the browser plays the exact same mix the native cpal callback
// produces — and the mixer's frame counter stays the game clock.
//
// Registered as a miniquad plugin so `kw_audio_start` exists as a wasm
// import before the module is instantiated.
"use strict";
(function () {
    let ctx = null;
    let node = null;

    // Game clock support. The mixer's frame counter counts frames *rendered*,
    // but a ScriptProcessorNode renders ahead of the speaker and, because its
    // callback runs on the main thread, in bursts — and a callback that misses
    // its deadline makes the node emit a period of silence, which pushes every
    // later frame further into the future. So rendered frames run ahead of
    // heard frames by an amount that jitters and grows.
    //
    // These two track the mapping. `rendered` is the same count the Rust side
    // keeps; `anchorFrame` is heard at `anchorTime` on the context clock, taken
    // from the callback's own playbackTime. From that, kw_audio_lag reports how
    // many rendered frames have not reached the speaker yet, and Rust subtracts
    // it to get a clock that follows the music instead of the renderer.
    let rendered = 0;
    let anchorFrame = 0;
    let anchorTime = 0;

    function kw_audio_start() {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
        // 2048-frame pulls: ~43 ms at 48 kHz. Small enough that the game
        // clock stays smooth, large enough that a main-thread callback
        // doesn't underrun every time a frame runs long.
        node = ctx.createScriptProcessor(2048, 0, 2);
        node.onaudioprocess = function (e) {
            // Pull counter, visible from the console for sync debugging
            window.__kw_pulls = (window.__kw_pulls || 0) + 1;
            const out = e.outputBuffer;
            const n = out.length;
            // This buffer's first frame is heard at playbackTime. A buffer
            // being filled now can't already have played, so anything at or
            // behind the context clock is a browser that doesn't report it
            // (older WebKit says 0) — fall back to "one buffer from now",
            // which is what the spec's value amounts to.
            const pt =
                e.playbackTime > ctx.currentTime
                    ? e.playbackTime
                    : ctx.currentTime + n / ctx.sampleRate;
            anchorFrame = rendered;
            anchorTime = pt;
            rendered += n;
            const ptr = wasm_exports.kw_render(n);
            const mix = new Float32Array(wasm_memory.buffer, ptr, n * 2);
            const l = out.getChannelData(0);
            const r = out.getChannelData(1);
            for (let i = 0; i < n; i++) {
                l[i] = mix[i * 2];
                r[i] = mix[i * 2 + 1];
            }
        };
        node.connect(ctx.destination);

        // Autoplay policy: a context created before any user gesture starts
        // suspended; resume it on the first key press or click.
        const resume = function () {
            if (ctx.state === "suspended") ctx.resume();
            window.removeEventListener("keydown", resume);
            window.removeEventListener("pointerdown", resume);
            window.removeEventListener("touchstart", resume);
        };
        window.addEventListener("keydown", resume);
        window.addEventListener("pointerdown", resume);
        window.addEventListener("touchstart", resume);

        return ctx.sampleRate;
    }

    // Frames rendered but not yet heard. The game clock is `rendered - lag`,
    // which advances with the speaker: a burst of catch-up renders doesn't move
    // it, and a dropout holds it still instead of teleporting it forward.
    // Clamped because the extrapolation is only trustworthy for about as long
    // as the buffering itself — a suspended context freezes both counts, so the
    // lag simply holds, and the clock with it.
    function kw_audio_lag() {
        if (!ctx || !node) return 0;
        const heard = anchorFrame + (ctx.currentTime - anchorTime) * ctx.sampleRate;
        const lag = Math.min(Math.max(rendered - heard, 0), 4 * node.bufferSize);
        window.__kw_lag = lag; // visible from the console for sync debugging
        return lag;
    }

    // The wasm decode runs on this same (main) thread and blocks the event
    // loop for hundreds of ms, so onaudioprocess can't fire and the pipeline
    // underruns into clicks. The game suspends the context across a decode:
    // suspend halts the rendering thread (its own thread, unblocked by the
    // stalled main thread), so the gap is clean silence instead. Both guard on
    // state so a stray call while already suspended/running is a no-op.
    function kw_audio_suspend() {
        if (ctx && ctx.state === "running") ctx.suspend();
    }
    function kw_audio_resume() {
        if (ctx && ctx.state === "suspended") ctx.resume();
    }

    // The demo's one non-audio hook: the menu's "download to expand library"
    // row opens the project page. It rides in this file rather than a script
    // of its own because the portfolio site serves its own index.html — a new
    // <script> tag there is outside this repo, and a missing import doesn't
    // degrade, it fails the whole wasm instantiation.
    //
    // The URL comes from Rust (web::DOWNLOAD_URL) as a pointer into the wasm
    // heap, so the address the menu prints on screen and the one opened here
    // can't drift apart.
    function kw_open_url(ptr, len) {
        const url = new TextDecoder().decode(new Uint8Array(wasm_memory.buffer, ptr, len));
        // The keypress that got here is a frame or two old, so the browser's
        // transient user activation normally still stands and a tab opens.
        // Blockers that disagree hand back null; navigating this tab is always
        // allowed and beats the key doing nothing at all.
        //
        // Deliberately no "noopener" in the feature string: with it, open()
        // returns null on SUCCESS as well as on failure, and the fallback below
        // then fires every time — sending the demo tab to the same page it just
        // opened in a new one. Severing .opener afterwards does the same job.
        const tab = window.open(url, "_blank");
        if (tab) tab.opener = null;
        else window.location.href = url;
    }

    miniquad_add_plugin({
        register_plugin: function (importObject) {
            importObject.env.kw_audio_start = kw_audio_start;
            importObject.env.kw_audio_lag = kw_audio_lag;
            importObject.env.kw_audio_suspend = kw_audio_suspend;
            importObject.env.kw_audio_resume = kw_audio_resume;
            importObject.env.kw_open_url = kw_open_url;
        },
        version: 1,
        name: "kw_audio",
    });
})();
