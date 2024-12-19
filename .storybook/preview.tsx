import React from "react";
import type { Decorator, Preview } from "@storybook/react";
import { ThemeProvider } from "../src/theme/provider.js";
import "./global.css";
import { DocsContainer, DocsContainerProps } from "@storybook/addon-docs";

const themeDecorator: Decorator = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);

const preview: Preview = {
  decorators: [themeDecorator],
  parameters: {
    docs: {
      container: (props: DocsContainerProps) => {
        return (
          <ThemeProvider>
            <DocsContainer {...props} />
          </ThemeProvider>
        );
      },
    },
    backgrounds: {
      default: "light",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
