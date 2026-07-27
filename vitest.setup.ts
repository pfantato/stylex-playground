import { vi } from "vitest";

// Stub out the runtime virtual module so Node.js can resolve the import
vi.mock("virtual:stylex:runtime", () => ({
  default: () => {},
  inject: () => {},
}));

// Also stub out the CSS virtual module if it causes extension errors
vi.mock("/virtual:stylex.css", () => ({}));
