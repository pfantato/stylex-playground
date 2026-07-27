import { definePreview } from "@storybook/react-vite";
import addonVis from "storybook-addon-vis";
import addonDocs from "@storybook/addon-docs";
import addonA11y from "@storybook/addon-a11y";
import addonLinks from "@storybook/addon-links";
import addonVitest from "@storybook/addon-vitest";

import { withStyleX } from "dsx-docs/decorators";

const preview = definePreview({
  decorators: [withStyleX],
  addons: [
    addonVis({ auto: true }),
    addonDocs(),
    addonA11y(),
    addonLinks(),
    addonVitest(),
  ],
  parameters: {
    a11y: {
      test: "error",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
});

export default preview;
