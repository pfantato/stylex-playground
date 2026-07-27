import react from "@vitejs/plugin-react";
import removeTestIdAttribute from "rollup-plugin-jsx-remove-attributes";
import externals from "rollup-plugin-node-externals";
import {
  defineConfig,
  loadEnv,
  type BuildEnvironmentOptions,
  type PluginOption,
  type ResolveOptions,
  type UserConfig,
} from "vite";
import dts from "vite-plugin-dts";
import stylex from "@stylexjs/unplugin";
import rsc from "@vitejs/plugin-rsc";

const getAliasPath = (path: string) => {
  return `${new URL(path, import.meta.url).href}*`;
};

const pluginRegistry: Map<string, PluginOption> = new Map([
  ["rsc", rsc()],
  ["react", react()],
  [
    "stylex",
    stylex.vite({
      dev: process.env.NODE_ENV === "development",
      unstable_moduleResolution: {
        type: "commonJS",
      },
      useCSSLayers: true,
      enableFontSizePxToRem: true,
      sxPropName: "dsx",
      treeshakeCompensation: true,
      aliases: {
        "dsx-components/*": [getAliasPath("./src/components/")],
        "dsx-docs/*": [getAliasPath("./src/docs/")],
        "dsx-themes/*": [getAliasPath("./src/themes/")],
      },
    }),
  ],
  [
    "dts",
    dts({
      entryRoot: "src/",
      exclude: [
        "**/*.test.tsx",
        "**/*.test.ts",
        "**/*.spec.tsx",
        "**/*.spec.ts",
        "vite.config.ts",
        "vitest.config.ts",
      ],
    }),
  ],
  [
    "test-id",
    removeTestIdAttribute({
      attributes: ["data-testid"],
      usage: "vite",
    }),
  ],
  ["inspect", import("vite-plugin-inspect").then((m) => m.default())],
  ["externals", externals()],
]);

export const getPlugins = (isSsrBuild?: boolean) => {
  const plugins = new Map(pluginRegistry);

  if (!isSsrBuild) {
    plugins.delete("rsc");
  }

  return Array.from(plugins.values());
};

const resolve: ResolveOptions = {
  tsconfigPaths: true,
};

const build: BuildEnvironmentOptions = {
  lib: {
    entry: "./src/index.ts",
    name: "dsx",
    formats: ["es", "cjs"],
    cssFileName: "dsx.css",
  },
  rolldownOptions: {
    input: "./src/index.ts",
    external: ["react", "react-dom", "vite"],
    platform: "browser",
    output: {
      cleanDir: true,
      dynamicImportInCjs: false,
    },
  },
};

export const config = defineConfig(({ command, isSsrBuild, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const config: UserConfig = {
    define: {
      APP_ENV: JSON.stringify(env.APP_ENV),
      DEV: JSON.stringify(env.APP_ENV !== "development"),
      PROD: JSON.stringify(env.APP_ENV === "production"),

      __IS_VITEST_RUN__: JSON.stringify(process.env.VITEST === "true"),
    },
    plugins: getPlugins(isSsrBuild),
    resolve,
  };

  if (command === "serve") {
    return config;
  }
  return {
    ...config,
    build,
  };
});

export default config;
