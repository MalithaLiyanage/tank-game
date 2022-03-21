/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * The value of the variable is set in scripts/watch.js and depend on packages/main/vite.config.js
   */
  readonly VITE_DEV_SERVER_URL: undefined | string
  readonly VITE_APP_TITLE: string,
  readonly VITE_API_HOST: string,
  readonly VITE_APP_NAV_BAR_COLOR: string,
}
