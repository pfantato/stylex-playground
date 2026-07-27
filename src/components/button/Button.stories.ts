import { expect, fn } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button.component";

const meta: Meta<typeof Button> = {
  title: "Components/Action/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary Button",
  },
  play: async ({ canvas, userEvent, args }) => {
    const button = await canvas.findByRole("button", {
      name: args.label,
    });

    await userEvent.click(button);

    expect(args.onClick).toHaveBeenCalled();
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Danger Button",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    label: "Disabled Button",
    disabled: true,
  },
  play: async ({ canvas, userEvent, args }) => {
    const button = await canvas.findByRole("button", {
      name: args.label,
    });

    await userEvent.click(button);

    expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Large Button",
  },
};
