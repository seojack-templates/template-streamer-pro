/**
 * Scoped CSS for the streamer-pro template.
 * EVERY selector must be prefixed with ".streamer-pro-demo" so the styles
 * cannot leak (this matters when the source is seeded into the builder).
 */
export const STREAMER_PRO_CSS = `
.streamer-pro-demo {
    --ink: #14141a;
    --paper: #ffffff;
    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
    color: var(--ink);
    background: var(--paper);
}
.streamer-pro-demo * { box-sizing: border-box; }
.streamer-pro-demo h1 { font-size: clamp(2rem, 5vw, 3.5rem); margin: 0 0 1rem; }
`;