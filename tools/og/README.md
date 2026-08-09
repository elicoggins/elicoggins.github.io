# Social card sources

`public/og.png` and `public/og-keyboardwarrior.png` are the Open Graph / Twitter
card images. They are rendered from the HTML here so they can be regenerated
rather than being orphan binaries.

The font paths inside these files are absolute `file://` URLs pointing at
`public/fonts/`, because headless Chrome needs them resolvable from disk.
`og-kw.html` loads `public/keyboardwarrior/gameplay.jpg` the same way — it is a
real frame of play, and the same file the demo page shows on a device that
cannot run the game. Replacing that still changes both.

Its wordmark is not a font: the letterforms are traced from ProggyClean at the
8-pixel cap height the game's own atlas is baked at, and emitted as SVG
geometry, because headless Chrome renders this once at a fixed size and hard
pixels are worth more there than a font file. The page itself takes the other
route and loads `public/keyboardwarrior/proggyclean.woff2` — the same face, so
the two agree — which is why nothing here needs a `@font-face` for it.

To regenerate:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=1200,630 \
  --screenshot=public/og.png \
  "file://$PWD/tools/og/og-home.html"
```

Same for `og-kw.html` → `public/og-keyboardwarrior.png`.

1200×630 is the size Facebook, LinkedIn, Slack and Discord all key off, and it
satisfies Twitter's `summary_large_image` 2:1-ish requirement.
