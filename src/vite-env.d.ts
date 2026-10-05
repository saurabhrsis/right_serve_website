/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_API_ORIGIN?: string;
  readonly VITE_SITE_URL?: string;
  readonly VITE_GTM_ID?: string;
  readonly VITE_GA4_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
