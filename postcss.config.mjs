import autoprefixer from "autoprefixer";
import nesting from "postcss-nesting";
import stylex from "@stylexjs/postcss-plugin";

import babelConfig from "./.babelrc.cjs";

const isProduction =
  import.meta.env?.PROD ?? process.env.NODE_ENV === "production";

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    nesting,
    stylex({
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "**/*.test.tsx",
        "**/*.test.ts",
        "**/*.spec.tsx",
        "**/*.spec.ts",
      ],
      useCSSLayers: isProduction,
      babelConfig: {
        babelrc: false,
        parserOpts: {
          plugins: ["typescript", "jsx"],
        },
        plugins: babelConfig.plugins,
      },
    }),
    autoprefixer,
  ],
};

export default config;
