import * as stylex from "@stylexjs/stylex";

export const colorTokens = {
  primaryActionBackground: "#0066cc",
  primaryActionText: "#ffffff",
  primaryActionHoverBackground: "#0052a3",
  primaryActionHoverText: "#ffffff",
  secondaryActionBackground: "#f5f5f5",
  secondaryActionText: "#333333",
  secondaryActionHoverBackground: "#e8e8e8",
  secondaryActionHoverText: "#333333",
  dangerActionBackground: "#dc3545",
  dangerActionText: "#ffffff",
  dangerActionHoverBackground: "#c82333",
  dangerActionHoverText: "#ffffff",
};

export const textWeightTokens = {
  textRegular: 400,
  textSemibold: 600,
  textBold: 700,
};

export const textSizeTokens = {
  textSize2xs: 11,
  textSizeXs: 12,
  textSizeS: 14,
  textSizeBase: 16,
  textSizeL: 18,
  textSizeXl: 22,
  textSize2xl: 24,
  textSize3xl: 28,
  textSize4xl: 32,
  textSize5xl: 36,
  textSize6xl: 40,
  textSize7xl: 48,
  textSize8xl: 56,
  textSize9xl: 64,
  textSize10xl: 72,
};

export const lineHeightTokens = {
  textCompressed: 1.2,
  textNormal: 1.5,
  textRelaxed: 1.75,
};

export const defaultFontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const defaultFontFamilyMono =
  'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const fontFamilyTokens = {
  fontFamilyBody: defaultFontFamily,
  fontFamilyHeading: defaultFontFamily,
  fontFamilyLabel: defaultFontFamily,
  fontFamilyMono: defaultFontFamilyMono,
  fontFamilyDisplay: defaultFontFamily,
};

export const spacingTokens = {
  spacing0: "0px",
  spacing0_5: "2px",
  spacing1: "4px",
  spacing1_5: "6px",
  spacing2: "8px",
  spacing3: "12px",
  spacing4: "16px",
  spacing5: "20px",
  spacing6: "24px",
  spacing7: "28px",
  spacing8: "32px",
  spacing9: "36px",
  spacing10: "40px",
  spacing11: "44px",
  spacing12: "48px",
  spacing14: "56px",
  spacing16: "64px",
  spacing20: "80px",
  spacing24: "96px",
  spacing28: "112px",
  spacing32: "128px",
};

export const sizeTokens = {
  sizeSmall: "32px",
  sizeMedium: "40px",
  sizeLarge: "48px",
};

export const strokeTokens = {
  strokeWidthThin: "1px",
  strokeWidthMedium: "2px",
  strokeWidthThick: "4px",
};

export const radiusTokens = {
  radiusNone: "0px",
  radiusSmall: "4px",
  radiusMedium: "12px",
  radiusLarge: "16px",
  radiusFull: "9999px",
};

export const shadowTokens = {
  shadowNone: "none",
  shadowSmall: "0 0 16px rgba(0, 0, 0, 0.25)",
  shadowMedium: "0 0 32px rgba(0, 0, 0, 0.25)",
  shadowLarge: "0 0 64px rgba(0, 0, 0, 0.25)",
};

export const durationTokens = {
  durationFast: "150ms",
  durationNormal: "300ms",
  durationSlow: "500ms",
};

export const transitionTimingTokens = {
  transitionTimingEase: "cubic-bezier(0.24, 1, 0.4, 1)",
};

export const theme = stylex.defineVars({
  ...colorTokens,
  ...textSizeTokens,
  ...textWeightTokens,
  ...lineHeightTokens,
  ...fontFamilyTokens,
  ...spacingTokens,
  ...sizeTokens,
  ...strokeTokens,
  ...radiusTokens,
  ...shadowTokens,
  ...durationTokens,
  ...transitionTimingTokens,
});
