import '@fontsource/newsreader/latin-300.css';
import '@fontsource/newsreader/latin-400.css';
import '@fontsource/newsreader/latin-400-italic.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import '@fontsource/ibm-plex-mono/latin-500.css';

import './style.css';

document.querySelector('#app').innerHTML = `
  <main class="site-shell" data-view="home" aria-label="Personal site">
    <div class="paper-field" aria-hidden="true"></div>

    <header class="status-line view-shared" aria-label="Letterhead">
      <p class="letterhead-release">
        <span>FILE // EC-1996</span>
        <span>PERSONAL INDEX</span>
      </p>
    </header>

    <section class="card-face view-panel view-panel--home" aria-labelledby="site-name" data-panel="home">
      <p class="kicker">Selected projects and works</p>
      <h1 id="site-name">Elijah Coggins</h1>
      <p class="statement">
        Software Engineer
      </p>

      <nav class="primary-links" aria-label="Primary links">
        <a href="https://github.com/elicoggins" target="_blank" rel="noopener noreferrer">GitHub</a>
        <button type="button" data-view-target="projects">Projects</button>
        <button type="button" data-email-panel aria-expanded="false" aria-controls="email-window">Contact</button>
      </nav>

      <div class="email-window" id="email-window" role="dialog" aria-label="Email address" aria-hidden="true">
        <button class="email-window__close" type="button" aria-label="Close email window" data-email-close>
          <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
          </svg>
        </button>
        <span class="email-window__label">Email</span>
        <button class="email-copy email-window__address" type="button" data-copy-email>elijahcoggins@gmail.com</button>
      </div>
    </section>

    <section class="project-ledger view-panel view-panel--projects" aria-labelledby="projects-title" data-panel="projects" aria-hidden="true">
      <div class="ledger-paper">
        <header class="ledger-header" aria-labelledby="projects-title">
          <div class="ledger-header__left">
            <div class="ledger-ident">
              <p class="ledger-ident__name" id="projects-title">Project Register</p>
              <p class="ledger-ident__title">Software Engineer</p>
              <p class="ledger-ident__location">Pennsylvania, United States</p>
            </div>

            <div class="ledger-contact">
              <a href="https://github.com/elicoggins" target="_blank" rel="noopener noreferrer">github.com/elicoggins</a>
              <button class="email-copy" type="button" data-copy-email>elijahcoggins@gmail.com</button>
            </div>

            <div class="ledger-status">
              <span>Updated May 2026</span>
              <span>Status: Active</span>
            </div>

            <p class="ledger-desc">Selected software, interfaces, and tools.</p>
          </div>

          <dl class="ledger-box">
            <div>
              <dt>Register #:</dt>
              <dd>EC-1996</dd>
            </div>
            <div>
              <dt>Compiled:</dt>
              <dd>May 12, 2026</dd>
            </div>
            <div>
              <dt>Typeface:</dt>
              <dd>TX-02 / Mono</dd>
            </div>
          </dl>
        </header>

        <div class="ledger-table" role="table" aria-label="Selected projects">
          <div class="ledger-row ledger-row--head" role="row">
            <span role="columnheader">#</span>
            <span role="columnheader">Code</span>
            <span role="columnheader">Description</span>
            <span role="columnheader">Kind</span>
            <span role="columnheader">State</span>
          </div>
          <a class="ledger-row" href="#home" data-view-target="home" role="row">
            <span role="cell">1</span>
            <span role="cell">IDX-001</span>
            <span role="cell">Personal site and project index</span>
            <span role="cell">Web</span>
            <span role="cell">Live</span>
          </a>
          <a class="ledger-row" href="https://elicoggins.github.io/unpuzzle" target="_blank" rel="noopener noreferrer" role="row">
            <span role="cell">2</span>
            <span role="cell">UNP-002</span>
            <span role="cell">Unpuzzle - Chess puzzle application</span>
            <span role="cell">Web // Next.JS</span>
            <span role="cell">Live</span>
          </a>
          <a class="ledger-row" href="https://github.com/elicoggins/workspace" target="_blank" rel="noopener noreferrer" role="row">
            <span role="cell">3</span>
            <span role="cell">WRK-003</span>
            <span role="cell">Workspace - macOS desktop window manager</span>
            <span role="cell">CLI // Rust</span>
            <span role="cell">In Development</span>
          </a>
          <a class="ledger-row" href="https://www.lexaloffle.com/bbs/?tid=153577" target="_blank" rel="noopener noreferrer" role="row">
            <span role="cell">4</span>
            <span role="cell">PI8-004</span>
            <span role="cell">Bytesize Fishtank - A virtual fishtank running on PICO-8</span>
            <span role="cell">PICO-8</span>
            <span role="cell">Live</span>
          </a>
        </div>

        <footer class="ledger-footer">
          <div class="ledger-signoff" aria-hidden="true">
            <span class="ledger-signoff__mark">****</span>
            <span>Thank you for visiting.</span>
            <span>Elijah Coggins</span>
          </div>
          <div class="ledger-footer__row">
            <button class="ledger-back" type="button" data-view-target="home">Return to index</button>
            <span class="ledger-footer__note">Revision 01 - Web Edition</span>
          </div>
        </footer>
      </div>
    </section>

    <aside class="colophon view-shared" aria-label="Site directory">
      <div class="colophon__meta">
        <span>Register</span>
        <span>Revision 01</span>
      </div>
      <dl class="colophon__grid">
        <div>
          <dt>01</dt>
          <dd>Projects<br>SELECTED WORK</dd>
        </div>
        <div>
          <dt>02</dt>
          <dd>Active<br>Updated 2026</dd>
        </div>
        <div>
          <dt>03</dt>
          <dd>WEB EDITION<br>PUBLIC ACCESS</dd>
        </div>
      </dl>
    </aside>

    <div class="micro micro--compass" aria-hidden="true">
      <svg class="compass" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" stroke-width="1" vector-effect="non-scaling-stroke" />
        <g stroke="currentColor" stroke-width="1" stroke-linecap="round" vector-effect="non-scaling-stroke">
          <line x1="20" y1="4.5" x2="20" y2="7.5" />
          <line x1="20" y1="32.5" x2="20" y2="35.5" />
          <line x1="4.5" y1="20" x2="7.5" y2="20" />
          <line x1="32.5" y1="20" x2="35.5" y2="20" />
        </g>
        <g class="compass__needle">
          <line x1="20" y1="20" x2="20" y2="9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
          <circle cx="20" cy="20" r="1.4" fill="currentColor" />
        </g>
      </svg>
    </div>

    <div class="micro micro--ledger" aria-hidden="true">
      <div class="micro--ledger__stamp">
        <span>EC</span>
        <span>PA</span>
      </div>
    </div>

    <canvas class="rain-canvas" aria-hidden="true"></canvas>
    <div class="copy-toast" role="status" aria-live="polite" aria-atomic="true">Email copied to clipboard</div>

    <div class="utility-controls" aria-label="Site controls">
      <button class="theme-toggle" type="button" aria-label="Switch to dark theme" aria-pressed="false">
        <svg class="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="3.8" fill="none" stroke="currentColor" stroke-width="1.3" />
          <path d="M12 4.5v2M12 17.5v2M4.5 12h2M17.5 12h2M6.7 6.7l1.3 1.3M16 16l1.3 1.3M6.7 17.3l1.3-1.3M16 8l1.3-1.3" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" />
        </svg>
        <svg class="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M16.5 16.4A6 6 0 0 1 8.1 8a6.8 6.8 0 0 0 8.4 8.4Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" />
        </svg>
      </button>

      <button class="rain-toggle ambient-toggle" type="button" aria-label="Toggle rain" aria-pressed="false">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="ambient-toggle__icon">
          <path d="M7 10a4 4 0 0 1 4-4 4.5 4.5 0 0 1 4.3 3.2A3 3 0 0 1 18 12H8a3 3 0 0 1-1-2Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" />
          <path d="M9 15l-1 3M13 15l-1 3M17 15l-1 3" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" />
        </svg>
      </button>

      <button class="sunset-toggle ambient-toggle" type="button" aria-label="Toggle sunset mountains" aria-pressed="false">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="ambient-toggle__icon">
          <path d="M4 13h16" fill="none" stroke="currentColor" stroke-width="1.3" />
          <path d="M7 13a5 5 0 0 1 10 0" fill="none" stroke="currentColor" stroke-width="1.3" />
          <path d="M5 16h14" fill="none" stroke="currentColor" stroke-width="1.3" />
        </svg>
      </button>

      <button class="road-toggle ambient-toggle" type="button" aria-label="Toggle synthwave road" aria-pressed="false">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="ambient-toggle__icon">
          <path d="M4 7h16" fill="none" stroke="currentColor" stroke-width="1.3" />
          <path d="M11 7 6 18M13 7l5 11" fill="none" stroke="currentColor" stroke-width="1.3" />
          <path d="M12 11v2M12 15v2" fill="none" stroke="currentColor" stroke-width="1.3" />
        </svg>
      </button>
    </div>
  </main>
`;

const shell = document.querySelector('.site-shell');
const panels = [...document.querySelectorAll('[data-panel]')];
const sharedElements = [...document.querySelectorAll('.view-shared')];
const viewButtons = [...document.querySelectorAll('[data-view-target]')];
const emailAddress = 'elijahcoggins@gmail.com';
const emailPanelTrigger = document.querySelector('[data-email-panel]');
const emailPanel = document.querySelector('#email-window');
const emailPanelClose = document.querySelector('[data-email-close]');
const emailCopyButtons = [...document.querySelectorAll('[data-copy-email]')];
const copyToast = document.querySelector('.copy-toast');
let copyToastTimer = null;

const VIEWS = new Set(['home', 'projects']);
const VIEW_TITLES = {
  home: 'Elijah Coggins',
  projects: 'Projects · Elijah Coggins',
};

function viewFromHash() {
  const h = location.hash.replace('#', '');
  return VIEWS.has(h) ? h : 'home';
}

function setView(view, options = {}) {
  const nextView = VIEWS.has(view) ? view : 'home';

  closeEmailPanel();
  document.title = VIEW_TITLES[nextView] ?? VIEW_TITLES.home;

  shell.dataset.view = nextView;

  panels.forEach((panel) => {
    const isActive = panel.dataset.panel === nextView;

    if (isActive) {
      panel.inert = false;
      panel.setAttribute('aria-hidden', 'false');
      return;
    }

    if (panel.contains(document.activeElement)) {
      document.activeElement.blur();
    }

    panel.inert = true;
    panel.setAttribute('aria-hidden', 'true');
  });

  sharedElements.forEach((element) => {
    const isHidden = nextView !== 'home';

    if (isHidden && element.contains(document.activeElement)) {
      document.activeElement.blur();
    }

    element.inert = isHidden;
    element.setAttribute('aria-hidden', String(isHidden));
  });

  if (options.focus !== false) {
    const focusSelectorByView = {
      projects: '.ledger-back',
      home: '[data-view-target="projects"]',
    };
    const focusTarget = document.querySelector(focusSelectorByView[nextView]);
    focusTarget?.focus({ preventScroll: true });
  }

  if (options.updateHistory === false) {
    return;
  }

  const nextUrl = nextView === 'home' ? location.pathname : `#${nextView}`;
  const currentHash = location.hash === '' ? '' : location.hash;
  const desiredHash = nextView === 'home' ? '' : `#${nextView}`;

  if (currentHash !== desiredHash) {
    history.pushState({ view: nextView }, '', nextUrl);
  }
}

viewButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (button instanceof HTMLAnchorElement) {
      event.preventDefault();
    }
    setView(button.dataset.viewTarget);
  });
});

function openEmailPanel() {
  if (!emailPanel || !emailPanelTrigger) return;
  emailPanel.setAttribute('aria-hidden', 'false');
  emailPanelTrigger.setAttribute('aria-expanded', 'true');
  emailPanel.querySelector('[data-copy-email]')?.focus({ preventScroll: true });
}

function closeEmailPanel() {
  if (!emailPanel || !emailPanelTrigger) return;
  emailPanel.setAttribute('aria-hidden', 'true');
  emailPanelTrigger.setAttribute('aria-expanded', 'false');
}

function showCopyToast(message, event) {
  if (!copyToast) return;
  copyToast.textContent = message;
  const anchor = event?.currentTarget?.getBoundingClientRect?.();
  if (anchor) {
    copyToast.style.setProperty('--toast-x', `${anchor.left + anchor.width / 2}px`);
    copyToast.style.setProperty('--toast-y', `${anchor.top}px`);
  } else if (typeof event?.clientX === 'number' && typeof event?.clientY === 'number') {
    copyToast.style.setProperty('--toast-x', `${event.clientX}px`);
    copyToast.style.setProperty('--toast-y', `${event.clientY}px`);
  }
  copyToast.dataset.visible = 'true';
  window.clearTimeout(copyToastTimer);
  copyToastTimer = window.setTimeout(() => {
    copyToast.dataset.visible = 'false';
  }, 2100);
}

async function copyEmailToClipboard(event) {
  try {
    await navigator.clipboard.writeText(emailAddress);
    showCopyToast('Email copied to clipboard', event);
    return;
  } catch {
    const fallback = document.createElement('textarea');
    fallback.value = emailAddress;
    fallback.setAttribute('readonly', '');
    fallback.style.position = 'fixed';
    fallback.style.opacity = '0';
    document.body.append(fallback);
    fallback.select();
    const copied = document.execCommand('copy');
    fallback.remove();
    showCopyToast(copied ? 'Email copied to clipboard' : 'Copy failed', event);
  }
}

emailPanelTrigger?.addEventListener('click', () => {
  const isOpen = emailPanel?.getAttribute('aria-hidden') === 'false';
  if (isOpen) {
    closeEmailPanel();
    return;
  }
  openEmailPanel();
});

emailPanelClose?.addEventListener('click', () => {
  closeEmailPanel();
  emailPanelTrigger?.focus({ preventScroll: true });
});

emailCopyButtons.forEach((button) => {
  button.addEventListener('click', copyEmailToClipboard);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeEmailPanel();
});

document.addEventListener('pointerdown', (event) => {
  if (emailPanel?.getAttribute('aria-hidden') !== 'false') return;
  if (emailPanel.contains(event.target) || emailPanelTrigger?.contains(event.target)) return;
  closeEmailPanel();
});

window.addEventListener('popstate', () => {
  setView(viewFromHash(), { updateHistory: false });
});

setView(viewFromHash(), {
  focus: false,
  updateHistory: false,
});

const THEME_STORAGE_KEY = 'theme';
const themeMedia = window.matchMedia('(prefers-color-scheme: dark)');
const themeToggle = document.querySelector('.theme-toggle');

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (themeToggle) {
    const isDark = theme === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute(
      'aria-label',
      isDark ? 'Switch to light theme' : 'Switch to dark theme'
    );
  }
}

function storedTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

const initialStored = storedTheme();
applyTheme(initialStored ?? (themeMedia.matches ? 'dark' : 'light'));

themeToggle?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    /* ignore */
  }
});

themeMedia.addEventListener?.('change', (event) => {
  if (storedTheme()) return;
  applyTheme(event.matches ? 'dark' : 'light');
});

// --- Rain animation ---
const rainCanvas = document.querySelector('.rain-canvas');
const rainToggle = document.querySelector('.rain-toggle');
const roadToggle = document.querySelector('.road-toggle');
const sunsetToggle = document.querySelector('.sunset-toggle');
const mobileViewport = window.matchMedia('(max-width: 760px)');
let rainActive = false;
let roadActive = false;
let sunsetActive = false;
let rainRafId = null;
let rainLastTime = 0;
let roadPhase = 0;
let sunsetPhase = 0;
let ambientScrubActive = false;
let ambientTouchY = null;
let ambientTouchLastTime = 0;
let ambientTouchVelocity = 0;
let ambientMomentumRafId = null;
let ambientScrollPeak = 0;
let ambientLastScrollMagnitude = 0;

const RAIN_DROPS = 150;
const rainDrops = Array.from({ length: RAIN_DROPS }, () => createRainDrop(true));

function createRainDrop(anywhere = false) {
  const layer = Math.random();
  const depth = layer < 0.2 ? 0.55 : layer < 0.65 ? 0.82 : 1.1;
  return {
    x: Math.random() * window.innerWidth,
    y: anywhere ? Math.random() * window.innerHeight : -Math.random() * window.innerHeight * 0.35,
    len: (22 + Math.random() * 32) * depth,
    speed: (2.2 + Math.random() * 3.2) * depth,
    opacity: (0.18 + Math.random() * 0.34) * depth,
    width: layer > 0.76 ? 0.85 : 0.55,
    splash: Math.random() > 0.72,
  };
}

function getInkColor() {
  return getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#181817';
}

function getUnderlayColor() {
  return getComputedStyle(document.documentElement).getPropertyValue('--underlay').trim() || getInkColor();
}

function wrapPhase(value) {
  return ((value % 1) + 1) % 1;
}

function hasActiveUnderlay() {
  return rainActive || roadActive || sunsetActive;
}

function releaseAmbientScrub() {
  ambientScrubActive = false;
  ambientScrollPeak = 0;
  ambientLastScrollMagnitude = 0;
  ambientTouchVelocity = 0;
  rainLastTime = performance.now();
}

function stopAmbientMomentum() {
  if (!ambientMomentumRafId) return;
  cancelAnimationFrame(ambientMomentumRafId);
  ambientMomentumRafId = null;
}

function applyAmbientScroll(deltaY, options = {}) {
  if (!hasActiveUnderlay()) return;

  const releaseOnComplete = options.release !== false;
  const ignoreInertiaTail = options.inertia === true;
  const cappedDelta = Math.max(-140, Math.min(140, deltaY));
  const magnitude = Math.abs(cappedDelta);
  const isInertiaTail =
    !ignoreInertiaTail &&
    (magnitude < 1.8 ||
    (ambientScrollPeak > 54 && magnitude < 9) ||
    (ambientLastScrollMagnitude > 26 && magnitude < ambientLastScrollMagnitude * 0.42));

  if (isInertiaTail) {
    if (releaseOnComplete) releaseAmbientScrub();
    return;
  }

  ambientScrubActive = true;
  ambientScrollPeak = Math.max(ambientScrollPeak, magnitude);
  ambientLastScrollMagnitude = magnitude;

  if (rainActive) {
    const H = window.innerHeight;
    for (const drop of rainDrops) {
      drop.y += cappedDelta * 0.34;
      if (drop.y - drop.len > H + 10) Object.assign(drop, createRainDrop(false));
      if (drop.y + drop.len < -10) Object.assign(drop, createRainDrop(false), { y: H + Math.random() * H * 0.35 });
    }
  }

  if (sunsetActive) sunsetPhase = wrapPhase(sunsetPhase + cappedDelta * 0.0014);
  if (roadActive) roadPhase = wrapPhase(roadPhase + cappedDelta * 0.0011);

  syncAmbienceCanvas();
  if (releaseOnComplete) releaseAmbientScrub();
}

function startAmbientMomentum(initialVelocity) {
  stopAmbientMomentum();

  let velocity = Math.max(-90, Math.min(90, initialVelocity));
  if (!mobileViewport.matches || !hasActiveUnderlay() || Math.abs(velocity) < 0.55) {
    releaseAmbientScrub();
    return;
  }

  let lastTime = performance.now();
  ambientScrubActive = true;

  function momentumFrame(now) {
    if (!hasActiveUnderlay()) {
      ambientMomentumRafId = null;
      releaseAmbientScrub();
      return;
    }

    const dt = Math.min(2.2, Math.max(0.4, (now - lastTime) / 16.7 || 1));
    lastTime = now;
    applyAmbientScroll(velocity * dt, { release: false, inertia: true });
    velocity *= Math.pow(0.91, dt);

    if (Math.abs(velocity) < 0.45) {
      ambientMomentumRafId = null;
      releaseAmbientScrub();
      return;
    }

    ambientMomentumRafId = requestAnimationFrame(momentumFrame);
  }

  ambientMomentumRafId = requestAnimationFrame(momentumFrame);
}

function synthHorizonY(fallbackHeight) {
  if (shell?.dataset.view === 'home') {
    const kickerRect = document.querySelector('.kicker')?.getBoundingClientRect();
    const nameRect = document.querySelector('#site-name')?.getBoundingClientRect();
    if (kickerRect && nameRect) {
      return (kickerRect.bottom + nameRect.top) / 2 - 4;
    }
  }
  return fallbackHeight * 0.46;
}

function rainFrame(now = performance.now()) {
  if (!rainCanvas) return;
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const W = rainCanvas.width / dpr;
  const H = rainCanvas.height / dpr;
  const ctx = rainCanvas.getContext('2d');
  const dt = Math.min(2.2, Math.max(0.4, (now - rainLastTime) / 16.7 || 1));
  rainLastTime = now;

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const underlay = getUnderlayColor();
  const scrubActive = ambientScrubActive;

  if (rainActive) {
    for (const d of rainDrops) {
      if (!scrubActive) d.y += d.speed * dt;

      if (d.y - d.len > H + 10) Object.assign(d, createRainDrop(false), { x: Math.random() * W });

      ctx.globalAlpha = d.opacity;
      ctx.strokeStyle = underlay;
      ctx.lineWidth = d.width;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x, d.y + d.len);
      ctx.stroke();

      if (d.splash && d.y > H - 18 && d.y < H + 8) {
        ctx.globalAlpha = d.opacity * 0.42;
        ctx.beginPath();
        ctx.moveTo(d.x - 6, H - 5);
        ctx.lineTo(d.x - 1, H - 7);
        ctx.moveTo(d.x + 1, H - 7);
        ctx.lineTo(d.x + 7, H - 5);
        ctx.stroke();
      }
    }
  }

  if (sunsetActive) {
    if (!scrubActive) sunsetPhase = wrapPhase(sunsetPhase + dt * 0.0032);
    const horizonY = synthHorizonY(H);
    const sunX = W * 0.5;
    const sunR = Math.min(W * 0.16, H * 0.28, 156);
    // Soft outer halo above the sun
    ctx.save();
    ctx.beginPath();
    ctx.rect(sunX - sunR * 1.8, horizonY - sunR * 1.8, sunR * 3.6, sunR * 1.8);
    ctx.clip();
    ctx.strokeStyle = underlay;
    ctx.lineCap = 'round';
    for (let i = 1; i <= 3; i++) {
      const r = sunR * (1 + i * 0.14);
      ctx.globalAlpha = 0.05 - i * 0.011;
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.arc(sunX, horizonY, r, Math.PI, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();

    // Sun body: rim + horizontal bands
    ctx.save();
    ctx.beginPath();
    ctx.rect(sunX - sunR - 8, horizonY - sunR - 8, sunR * 2 + 16, sunR + 9);
    ctx.clip();

    ctx.strokeStyle = underlay;
    ctx.lineCap = 'round';
    ctx.globalAlpha = 0.22;
    ctx.lineWidth = 0.85;
    ctx.beginPath();
    ctx.arc(sunX, horizonY, sunR, Math.PI, Math.PI * 2);
    ctx.stroke();

    for (let i = 0; i < 9; i++) {
      const band = (i / 9 + sunsetPhase) % 1;
      const y = horizonY - sunR + band * sunR;
      const dy = y - horizonY;
      const half = Math.sqrt(Math.max(0, sunR * sunR - dy * dy));
      // softer near top, stronger near horizon
      const lift = 1 - band;
      ctx.globalAlpha = 0.04 + lift * 0.11;
      ctx.lineWidth = 0.4 + lift * 0.25;
      ctx.beginPath();
      ctx.moveTo(sunX - half + 1, y);
      ctx.lineTo(sunX + half - 1, y);
      ctx.stroke();
    }
    ctx.restore();

    // Full-width horizon line with edge taper
    ctx.strokeStyle = underlay;
    ctx.lineCap = 'butt';
    const horizonSegments = 48;
    for (let i = 0; i < horizonSegments; i++) {
      const t0 = i / horizonSegments;
      const t1 = (i + 1) / horizonSegments;
      const mid = (t0 + t1) / 2;
      // taper at edges with a smooth bell-ish curve
      const edge = Math.sin(mid * Math.PI);
      const alphaScale = Math.pow(edge, 0.55);
      ctx.globalAlpha = 0.045 + alphaScale * 0.13;
      ctx.lineWidth = 0.5 + alphaScale * 0.25;
      ctx.beginPath();
      ctx.moveTo(W * t0, horizonY);
      ctx.lineTo(W * t1, horizonY);
      ctx.stroke();
    }
    ctx.lineCap = 'round';

    // Stars / specks scattered above horizon
    ctx.fillStyle = underlay;
    const starSeed = (n) => {
      const s = Math.sin(n * 9301 + 49297) * 233280;
      return s - Math.floor(s);
    };
    for (let i = 0; i < 22; i++) {
      const sx = starSeed(i + 1) * W;
      const sy = starSeed(i + 101) * horizonY * 0.78;
      // avoid drawing stars inside the sun
      const dx = sx - sunX;
      const dy = sy - horizonY;
      if (dx * dx + dy * dy < sunR * sunR * 1.25) continue;
      const twinkle = 0.04 + Math.sin(sunsetPhase * Math.PI * 2 + i) * 0.025;
      ctx.globalAlpha = Math.max(0.025, 0.08 + twinkle);
      const size = 0.6 + starSeed(i + 201) * 0.9;
      ctx.beginPath();
      ctx.arc(sx, sy, size, 0, Math.PI * 2);
      ctx.fill();
    }

    // Mountain ridges — angular silhouettes
    const ridgeBase = horizonY + 1;
    const ridgeHeight = W <= 760 ? Math.min(H * 0.18, sunR * 0.82, 96) : Math.min(H * 0.22, 140);

    ctx.strokeStyle = underlay;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const drawRidge = (points, alpha, width) => {
      ctx.globalAlpha = alpha;
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(points[0][0], points[0][1]);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1]);
      }
      ctx.stroke();
    };

    // Distant ridge (faintest)
    drawRidge([
      [W * 0.0, ridgeBase - ridgeHeight * 0.04],
      [W * 0.08, ridgeBase - ridgeHeight * 0.14],
      [W * 0.15, ridgeBase - ridgeHeight * 0.06],
      [W * 0.24, ridgeBase - ridgeHeight * 0.22],
      [W * 0.34, ridgeBase - ridgeHeight * 0.1],
      [W * 0.44, ridgeBase - ridgeHeight * 0.26],
      [W * 0.54, ridgeBase - ridgeHeight * 0.12],
      [W * 0.64, ridgeBase - ridgeHeight * 0.24],
      [W * 0.74, ridgeBase - ridgeHeight * 0.1],
      [W * 0.84, ridgeBase - ridgeHeight * 0.2],
      [W * 0.92, ridgeBase - ridgeHeight * 0.08],
      [W * 1.0, ridgeBase - ridgeHeight * 0.04],
    ], 0.05, 0.5);

    // Mid ridge (main mountain silhouette)
    drawRidge([
      [W * 0.0, ridgeBase],
      [W * 0.06, ridgeBase - ridgeHeight * 0.22],
      [W * 0.14, ridgeBase - ridgeHeight * 0.5],
      [W * 0.22, ridgeBase - ridgeHeight * 0.24],
      [W * 0.3, ridgeBase - ridgeHeight * 0.62],
      [W * 0.38, ridgeBase - ridgeHeight * 0.28],
      [W * 0.46, ridgeBase - ridgeHeight * 0.42],
      [W * 0.54, ridgeBase - ridgeHeight * 0.46],
      [W * 0.62, ridgeBase - ridgeHeight * 0.26],
      [W * 0.7, ridgeBase - ridgeHeight * 0.58],
      [W * 0.78, ridgeBase - ridgeHeight * 0.3],
      [W * 0.86, ridgeBase - ridgeHeight * 0.48],
      [W * 0.94, ridgeBase - ridgeHeight * 0.22],
      [W * 1.0, ridgeBase],
    ], 0.13, 0.75);

    // Near foreground ridge (low, soft)
    drawRidge([
      [W * 0.0, ridgeBase + 18],
      [W * 0.1, ridgeBase + 4],
      [W * 0.2, ridgeBase - ridgeHeight * 0.14],
      [W * 0.3, ridgeBase + 6],
      [W * 0.42, ridgeBase - ridgeHeight * 0.18],
      [W * 0.52, ridgeBase + 2],
      [W * 0.62, ridgeBase - ridgeHeight * 0.12],
      [W * 0.74, ridgeBase + 4],
      [W * 0.86, ridgeBase - ridgeHeight * 0.16],
      [W * 0.96, ridgeBase + 6],
      [W * 1.0, ridgeBase + 18],
    ], 0.07, 0.55);
  }

  if (roadActive) {
    if (!scrubActive) roadPhase = wrapPhase(roadPhase + dt * 0.0025);
    const horizonY = synthHorizonY(H);
    const roadBottomY = H + 2;
    const vanishX = W * 0.5;
    // Widen the road on narrow viewports so it doesn't look like a thin sliver on mobile.
    const narrow = Math.max(0, Math.min(1, (720 - W) / (720 - 360)));
    const topHalf = W * (0.032 + narrow * 0.022);
    const bottomHalf = W * (0.34 + narrow * 0.24);

    ctx.strokeStyle = underlay;
    ctx.lineCap = 'round';

    // Horizon and road edges
    ctx.globalAlpha = 0.16;
    ctx.lineWidth = 0.55;
    ctx.beginPath();
    ctx.moveTo(0, horizonY);
    ctx.lineTo(W, horizonY);
    ctx.moveTo(vanishX - topHalf, horizonY);
    ctx.lineTo(vanishX - bottomHalf, roadBottomY);
    ctx.moveTo(vanishX + topHalf, horizonY);
    ctx.lineTo(vanishX + bottomHalf, roadBottomY);
    ctx.stroke();

    // Lane rays from vanishing point
    ctx.globalAlpha = 0.075;
    ctx.lineWidth = 0.45;
    for (let i = -3; i <= 3; i++) {
      if (i === 0) continue;
      const t = i / 3;
      ctx.beginPath();
      ctx.moveTo(vanishX + t * topHalf, horizonY);
      ctx.lineTo(vanishX + t * bottomHalf, roadBottomY);
      ctx.stroke();
    }

    // Moving cross grid lines
    for (let i = 0; i < 18; i++) {
      const z = (i / 18 + roadPhase) % 1;
      const edgeProgress = Math.pow(z, 2.25);
      const y = horizonY + (roadBottomY - horizonY) * edgeProgress;
      const half = topHalf + (bottomHalf - topHalf) * edgeProgress;
      const alpha = 0.045 + z * 0.14;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = 0.35 + z * 0.25;
      ctx.beginPath();
      ctx.moveTo(vanishX - half, y);
      ctx.lineTo(vanishX + half, y);
      ctx.stroke();
    }
  }

  if (rainActive || roadActive || sunsetActive) rainRafId = requestAnimationFrame(rainFrame);
}

function resizeRainCanvas() {
  if (!rainCanvas) return;
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  rainCanvas.width = Math.ceil(window.innerWidth * dpr);
  rainCanvas.height = Math.ceil(window.innerHeight * dpr);
  rainCanvas.style.width = `${window.innerWidth}px`;
  rainCanvas.style.height = `${window.innerHeight}px`;
}
resizeRainCanvas();
window.addEventListener('resize', resizeRainCanvas, { passive: true });

window.addEventListener('wheel', (event) => {
  if (!hasActiveUnderlay() || Math.abs(event.deltaY) < 0.1) return;
  event.preventDefault();
  applyAmbientScroll(event.deltaY);
}, { passive: false });

window.addEventListener('touchstart', (event) => {
  stopAmbientMomentum();
  ambientTouchY = event.touches[0]?.clientY ?? null;
  ambientTouchLastTime = performance.now();
  ambientTouchVelocity = 0;
  if (mobileViewport.matches && hasActiveUnderlay()) {
    ambientScrubActive = true;
    ambientScrollPeak = 0;
    ambientLastScrollMagnitude = 0;
    rainLastTime = performance.now();
  }
}, { passive: true });

window.addEventListener('touchmove', (event) => {
  if (!hasActiveUnderlay() || ambientTouchY === null) return;
  const nextY = event.touches[0]?.clientY;
  if (nextY === undefined) return;
  const touchDeltaY = ambientTouchY - nextY;
  const deltaY = mobileViewport.matches ? -touchDeltaY : touchDeltaY;
  const now = performance.now();
  const elapsed = Math.max(8, now - ambientTouchLastTime);
  const instantVelocity = (deltaY / elapsed) * 16.7;
  ambientTouchVelocity = ambientTouchVelocity * 0.62 + instantVelocity * 0.38;
  ambientTouchLastTime = now;

  if (mobileViewport.matches && shell?.dataset.view === 'projects') {
    applyAmbientScroll(deltaY, { release: false });
    ambientTouchY = nextY;
    return;
  }

  event.preventDefault();
  applyAmbientScroll(deltaY, { release: !mobileViewport.matches });
  ambientTouchY = nextY;
}, { passive: false });

window.addEventListener('touchend', () => {
  ambientTouchY = null;
  if (mobileViewport.matches) {
    startAmbientMomentum(ambientTouchVelocity);
    return;
  }
  releaseAmbientScrub();
}, { passive: true });
window.addEventListener('touchcancel', () => {
  ambientTouchY = null;
  stopAmbientMomentum();
  releaseAmbientScrub();
}, { passive: true });

function syncAmbienceCanvas() {
  const hasActiveEffect = rainActive || roadActive || sunsetActive;

  if (hasActiveEffect) {
    rainCanvas?.classList.add('is-active');
    if (!rainRafId) {
      rainLastTime = performance.now();
      rainRafId = requestAnimationFrame(rainFrame);
    }
    return;
  }

  rainCanvas?.classList.remove('is-active');
  releaseAmbientScrub();
  if (rainRafId) { cancelAnimationFrame(rainRafId); rainRafId = null; }
  const ctx = rainCanvas?.getContext('2d');
  if (ctx && rainCanvas) ctx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
}

rainToggle?.addEventListener('click', () => {
  rainActive = !rainActive;
  rainToggle.setAttribute('aria-pressed', String(rainActive));
  syncAmbienceCanvas();
});

roadToggle?.addEventListener('click', () => {
  roadActive = !roadActive;
  roadToggle.setAttribute('aria-pressed', String(roadActive));
  syncAmbienceCanvas();
});

sunsetToggle?.addEventListener('click', () => {
  sunsetActive = !sunsetActive;
  sunsetToggle.setAttribute('aria-pressed', String(sunsetActive));
  syncAmbienceCanvas();
});

// --- Micrographics: compass (corner) ---
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const compassNeedle = document.querySelector('.compass__needle');
const compassSvg = document.querySelector('.compass');
const compassState = compassSvg ? { cx: 0, cy: 0, target: 0, current: 0, active: false } : null;

const statusOrbitOuter = document.querySelector('.status-orbits__outer');
const statusOrbitInner = document.querySelector('.status-orbits__inner');

function measureCompass() {
  if (!compassState) return;
  const r = compassSvg.getBoundingClientRect();
  compassState.cx = r.left + r.width / 2;
  compassState.cy = r.top + r.height / 2;
}
measureCompass();
window.addEventListener('resize', measureCompass, { passive: true });
window.addEventListener('scroll', measureCompass, { passive: true });

window.addEventListener('pointermove', (e) => {
  if (compassState) {
    const dx = e.clientX - compassState.cx;
    const dy = e.clientY - compassState.cy;
    compassState.target = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    compassState.active = true;
  }
}, { passive: true });

window.addEventListener('pointerleave', () => {
  if (compassState) compassState.active = false;
}, { passive: true });

function shortestArc(from, to) {
  return ((to - from) % 360 + 540) % 360 - 180;
}

const startTime = performance.now();

function frame(now) {
  const t = Math.max(0, (now - startTime) / 1000);
  const baseSpin = prefersReducedMotion ? 0 : t;

  // Compass corner widget
  if (compassNeedle && compassState) {
    measureCompass();
    if (!compassState.active && !prefersReducedMotion) {
      compassState.target = Math.sin(t * 0.18) * 40 + Math.sin(t * 0.07) * 25;
    }
    const delta = shortestArc(compassState.current, compassState.target);
    compassState.current += delta * (prefersReducedMotion ? 1 : 0.12);
    compassNeedle.setAttribute('transform', `rotate(${compassState.current} 20 20)`);
  }

  // Status-line orbits (auto)
  if (statusOrbitOuter) statusOrbitOuter.setAttribute('transform', `rotate(${baseSpin * 18} 16 16)`);
  if (statusOrbitInner) statusOrbitInner.setAttribute('transform', `rotate(${-baseSpin * 32} 16 16)`);

  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);



