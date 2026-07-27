# StyleX Storybook Playground

This project is built based on Meta's official [`example-storybook`](https://github.com/facebook/stylex/tree/main/examples/example-storybook) demonstration for **StyleX** with **Storybook 9** and **Vite** using **TypeScript** and **Yarn**.

## Features

- 💎 **StyleX Styling**: Compile-time CSS extraction with `@stylexjs/stylex`, `@stylexjs/babel-plugin`, and `@stylexjs/postcss-plugin`.
- 📚 **Storybook 9**: Fast interactive UI development powered by Vite (`@storybook/react-vite`).
- ⚡ **Full TypeScript**: End-to-end type safety for components, stories, and configuration files.
- 🧶 **Yarn**: Fast, reliable dependency management.

## Getting Started

### Install Dependencies

```bash
yarn install
```

### Start Storybook Dev Server

```bash
yarn storybook
```

Starts Storybook locally on [http://localhost:6006](http://localhost:6006).

### Build Static Storybook

```bash
yarn build-storybook
```

Outputs the static Storybook production bundle to `storybook-static/`.

### Linting

```bash
yarn lint
```
