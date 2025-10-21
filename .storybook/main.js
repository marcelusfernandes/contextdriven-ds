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
    const path = require("path");

    // Configurar alias @icons
    config.resolve.alias = {
      ...config.resolve.alias,
      '@icons': path.resolve(__dirname, '../components/icons'),
    };

    // IMPORTANTE: SVGR deve vir ANTES do Tamagui
    config.plugins.unshift(
      svgr.default({
        svgrOptions: {
          exportType: 'default',
          ref: true,
          svgo: false,
          titleProp: true,
        },
        include: '**/*.svg',
      })
    );

    config.plugins.push(
      tamaguiPlugin({
        config: "../tamagui.config.ts",
        components: ["tamagui"],
      })
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
