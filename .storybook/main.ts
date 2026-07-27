import { join, dirname } from "node:path";
import { createRequire } from "node:module";
import type { StorybookConfig } from "@storybook/react-vite";

const require = createRequire(import.meta.url);

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-vitest"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("storybook-addon-vis"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      tsconfigPath: "./tsconfig.json",
      propFilter: (prop) => {
        const hasDoc = prop.description !== "";
        const isExternal =
          prop.parent && /node_modules/.test(prop.parent.fileName);

        return hasDoc && !isExternal;
      },
    },
  },

  core: {
    builder: {
      name: "@storybook/builder-vite",
      options: {
        viteConfigPath: "./vite.config.ts",
      },
    },
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
};

export default config;
