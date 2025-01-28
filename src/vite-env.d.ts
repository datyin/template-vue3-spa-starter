/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BUILD_DATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.md" {
  import type { ComponentOptions } from "vue";

  const Component: ComponentOptions;
  export default Component;
}
