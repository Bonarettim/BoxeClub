import type { StorybookConfig } from '@storybook/nextjs'; // Mudou para o padrão do Next

const config: StorybookConfig = {
  stories: [
    '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp"
  ],
  framework: {
    name: "@storybook/nextjs", 
    options: {},
  },
  staticDirs: [
    "../public"
  ]
};
export default config;