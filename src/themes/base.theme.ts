import * as stylex from "@stylexjs/stylex";
import { theme } from "./tokens.stylex";

export const typographyTheme = stylex.createTheme(theme, {
  fontFamilyBody: '"Buenos Aires", sans-serif',
  fontFamilyHeading: '"Buenos Aires", sans-serif',
  fontFamilyDisplay: '"Buenos Aires", sans-serif',
  fontFamilyLabel: '"Buenos Aires", sans-serif',
  fontFamilyMono: '"Buenos Aires", monospace',
});
