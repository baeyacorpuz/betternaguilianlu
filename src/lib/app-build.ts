/** Build info injected by `define` in vite.config.ts. Shown in the footer and on /updates. */
export const appBuild = {
  version: __APP_VERSION__,
  /** ISO date (yyyy-mm-dd) of the build, Asia/Manila. */
  date: __BUILD_DATE__,
}
