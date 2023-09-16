import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        // Since our default config is building a library,
        // we replace it with a basic react config
        viteConfigPath: ".storybook/vite.config.ts",
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
