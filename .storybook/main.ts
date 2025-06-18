import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": resolve(__dirname, ".."),
        "@/components": resolve(__dirname, "../components"),
        "@/templates": resolve(__dirname, "../templates"),
        "@/types": resolve(__dirname, "../types"),
        "@/constants": resolve(__dirname, "../contstants"),
        "@/public": resolve(__dirname, "../public"),
      };
    }
    return config;
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
