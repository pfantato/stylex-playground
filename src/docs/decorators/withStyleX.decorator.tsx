import { createPortal } from "react-dom";
import type { DecoratorFunction } from "storybook/internal/csf";

import { StylesInjector } from "dsx-components/styles-injector";

export const withStyleX: DecoratorFunction = (Story, context) => {
  if (context.parameters?.withStyleX === false) {
    return <Story />;
  }

  const styleCSSHref =
    context.parameters?.styleCSSHref ?? context.args.parameters?.styleCSSHref;

  return (
    <>
      {createPortal(
        <StylesInjector cssHref={styleCSSHref ?? "/styles.css"} />,
        document.head,
      )}
      <Story />
    </>
  );
};
