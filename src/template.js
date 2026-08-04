// Single source of truth for the page markup.
//
// At build time a Vite plugin (see vite.config.js) inlines this into the
// #app container so the page has real HTML before any JavaScript runs.
// Crawlers that do not execute JS still see the content. In dev the
// container ships empty and main.js fills it in.
export const template = `
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
          <a class="ledger-row" href="/keyboardwarrior/" role="row">
            <span role="cell">5</span>
            <span role="cell">KBW-005</span>
            <span role="cell">Keyboard Warrior - Rhythm typing game</span>
            <span role="cell">Web // Rust</span>
            <span role="cell">In Development</span>
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
