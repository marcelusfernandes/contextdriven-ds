const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname, { isCSSEnabled: true });

if (process.env.STORYBOOK_ENABLED) {
  const path = require("path");
  const { writeRequires } = require("@storybook/react-native/scripts/loader");

  writeRequires({
    configPath: path.resolve(__dirname, "./.ondevice"),
    unstable_useRequireContext: true,
  });

  defaultConfig.resolver.resolverMainFields = [
    "sbmodern",
    ...defaultConfig.resolver.resolverMainFields,
  ];
}

// Configuração para suportar SVG
const { transformer, resolver } = defaultConfig;

defaultConfig.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
  unstable_allowRequireContext: true,
};

defaultConfig.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...resolver.sourceExts, "svg", "mjs"],
};

module.exports = defaultConfig;
