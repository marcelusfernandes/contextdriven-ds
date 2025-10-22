if (!process.env.TAMAGUI_TARGET) {
  process.env.TAMAGUI_TARGET = "native";
}

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // MUDANÇA: Storybook 8 não precisa mais do babel-plugin-react-docgen-typescript
      // Plugin removido conforme documentação de upgrade
      
      [
        "transform-inline-environment-variables",
        {
          include: ["TAMAGUI_TARGET", "EXPO_ROUTER_APP_ROOT", "STORYBOOK_ENABLED"],
        },
      ],
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@icons": "./components/icons",
            "@components": "./components",
          },
        },
      ],
      // React Native Web (se necessário)
      process.env.TAMAGUI_TARGET === 'web' && "react-native-web",
      // Reanimated deve ser o último
      "react-native-reanimated/plugin",
    ].filter(Boolean),
  };
};
