import type { FC } from "react";
import * as stylex from "@stylexjs/stylex";
import { theme } from "../../themes/tokens.stylex";

export const buttonStyles = stylex.create({
  base: {
    fontFamily: theme.fontFamilyBody,
    fontWeight: theme.textSemibold,
    cursor: "pointer",
    borderWidth: 0,
    borderStyle: "none",
    borderColor: "transparent",
    borderRadius: 6,
    transition: "all 0.2s ease",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transform: {
      default: "translateY(0)",
      ":hover": "translateY(-1px)",
      ":active": "translateY(0)",
    },
    boxShadow: {
      default: "none",
      ":hover": "0 4px 8px rgba(0, 0, 0, 0.12)",
    },
  },
  primary: {
    backgroundColor: {
      default: theme.primaryActionBackground,
      ":hover": theme.primaryActionHoverBackground,
    },
    color: theme.primaryActionText,
  },
  secondary: {
    backgroundColor: {
      default: theme.secondaryActionBackground,
      ":hover": theme.secondaryActionHoverBackground,
    },
    color: theme.secondaryActionText,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.secondaryActionHoverBackground,
  },
  danger: {
    backgroundColor: {
      default: theme.dangerActionBackground,
      ":hover": theme.dangerActionHoverBackground,
    },
    color: theme.dangerActionText,
  },
  small: {
    fontSize: theme.textSizeS,
    padding: `${theme.spacing2} ${theme.spacing4}`,
    minHeight: theme.sizeSmall,
  },
  medium: {
    fontSize: theme.textSizeBase,
    padding: `${theme.spacing3} ${theme.spacing6}`,
    minHeight: theme.sizeMedium,
  },
  large: {
    fontSize: theme.textSizeL,
    padding: `${theme.spacing4} ${theme.spacing8}`,
    minHeight: theme.sizeLarge,
  },
});

export type ButtonProps = {
  /**
   * The size of the button
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";
  /** The variant of the button
   * @default 'primary'
   */
  variant?: "primary" | "secondary" | "danger";
  /**
   * The label of the button
   * @example 'Click me'
   */
  label: string;
  /**
   * Function to call when the button is clicked
   */
  onClick?: () => void;
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
  size = "medium",
  variant = "primary",
  disabled = false,
  label,
  onClick,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    onClick?.();
  };

  return (
    <button
      type="button"
      {...stylex.props(
        buttonStyles.base,
        buttonStyles[size],
        buttonStyles[variant],
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
