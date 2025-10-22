const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const defaultConfig = getDefaultConfig(__dirname, { isCSSEnabled: true });

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

// Configuração do Storybook (v8+)
if (process.env.STORYBOOK_ENABLED) {
  defaultConfig.resolver.resolverMainFields = [
    "sbmodern",
    "react-native",
    "browser",
    "main",
  ];
  
  defaultConfig.watchFolders.push(
    path.resolve(__dirname, "./.ondevice")
  );
}

module.exports = defaultConfig;
