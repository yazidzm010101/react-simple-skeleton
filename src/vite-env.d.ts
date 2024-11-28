/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_EXAMPLE_API_URL: string;
  // Add other environment variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
