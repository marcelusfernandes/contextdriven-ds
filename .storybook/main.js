module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  staticDirs: ['./public'],
  viteFinal: async (config, { configType }) => {
    const { tamaguiPlugin } = require("@tamagui/vite-plugin");
    const svgr = require("vite-plugin-svgr");

    config.plugins.push(
      tamaguiPlugin({
        config: "../tamagui.config.ts",
        components: ["tamagui"],
      }),
      svgr.default({
        svgrOptions: {
          native: true,
        },
      }),
    );

    return config;
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  typescript: {
    reactDocgen: "react-docgen",
  },
  env: (config) => ({
    ...config,
    TAMAGUI_TARGET: "web",
  }),
};
