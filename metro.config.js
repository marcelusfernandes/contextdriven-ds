const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const defaultConfig = getDefaultConfig(__dirname, { isCSSEnabled: true });

// Configuração do Storybook
if (process.env.STORYBOOK_ENABLED) {
  // MUDANÇA: Storybook 8 usa novo sistema de loader
  const { generate } = require("@storybook/react-native/scripts/loader");
  
  generate({
    configPath: path.resolve(__dirname, "./.ondevice"),
  });

  defaultConfig.resolver.resolverMainFields = [
    "sbmodern",
    "react-native",
    "browser",
    "main",
  ];
}

// Configuração para SVG
const { transformer, resolver } = defaultConfig;

defaultConfig.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
  unstable_allowRequireContext: true,
};

defaultConfig.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...resolver.sourceExts, "svg", "mjs", "cjs"],
};

// Watchman config para performance
defaultConfig.watchFolders = [
  path.resolve(__dirname, "./"),
];

module.exports = defaultConfig;
