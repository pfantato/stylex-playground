"use client";

import { useEffect } from "react";
import type { StylesInjectorComponent } from "./styles-injector.types";

export const StylesInjector: StylesInjectorComponent = ({ cssHref }) => {
  const isDev = import.meta.env.DEV ?? import.meta.env.MODE === "development";
  const isVitestRun = import.meta.env.VITEST;

  const normalizedCssHref = cssHref.startsWith("/")
    ? cssHref.slice(1)
    : cssHref;

  const linkHref = isDev ? `/virtual:${normalizedCssHref}` : cssHref;

  useEffect(() => {
    if (isDev && !isVitestRun) {
      import("virtual:stylex:runtime");
    }
  }, []);

  if (isDev) {
    return null;
  }

  return <link href={linkHref} rel="stylesheet" type="text/css" />;
};
