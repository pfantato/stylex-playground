interface ViteTypeOptions {
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly APP_ENV: "development" | "production" | "preview";
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly VITEST: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "dsx-components/**/*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "virtual:stylex:runtime" {}
