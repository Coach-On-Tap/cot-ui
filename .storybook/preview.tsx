import type { Preview } from "@storybook/react";
import React from "react";
import "../src/index.css";
import "../src/fonts.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#f1f1f1",
        },
        {
          name: "dark",
          value: "#191919",
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-b-surface1 font-inter text-body-1 text-t-primary antialiased min-h-screen p-4">
        <Story />
      </div>
    ),
  ],
};

export default preview;
