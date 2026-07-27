import path from "node:path";
import { fileURLToPath } from "node:url";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { storybookVis } from "storybook-addon-vis/vitest-plugin";

import { getPlugins } from "./vite.config";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          ...getPlugins(false),
          {
            name: "vitest-stylex-runtime-fallback",
            resolveId(id) {
              if (
                id === "virtual:stylex:runtime" ||
                id === "/virtual:stylex.css"
              ) {
                return "\0" + id; // Mark it as an internal virtual id
              }
            },
            load(id) {
              if (id === "\0virtual:stylex:runtime") {
                return "@stylex"; // Serve a clean empty module to the browser
              }
              if (id === "\0/virtual:stylex.css") {
                return "@stylex"; // Serve empty CSS rules
              }
            },
          },

          storybookTest({
            configDir: path.join(dirname, ".storybook"),
            disableAddonDocs: false,
          }),
          storybookVis(),
        ],
        test: {
          name: "storybook",
          browser: {
            screenshotFailures: true,
            screenshotDirectory: path.join(
              dirname,
              "test-results",
              "storybook-screenshots",
            ),
            enabled: true,
            headless: true,
            provider: playwright({
              launchOptions: {
                headless: true,
                channel: "chromium",
                slowMo: 50,
                artifactsDir: path.join(
                  dirname,
                  "test-results",
                  "storybook-artifacts",
                ),
              },
            }),
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
