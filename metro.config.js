/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const { getDefaultConfig } = require('@expo/metro-config');

module.exports = async () => {
  const config = await getDefaultConfig(__dirname);

  // Keep your SVG transformer configuration
  config.transformer.babelTransformerPath = require.resolve(
    'react-native-svg-transformer'
  );

  // Modify the asset extensions to handle SVGs properly
  const { assetExts, sourceExts } = config.resolver;
  config.resolver.assetExts = assetExts.filter((ext) => ext !== 'svg');
  config.resolver.sourceExts = [...sourceExts, 'svg', 'mjs'];

  // Add this to resolve the missing-asset-registry-path error
  config.resolver.extraNodeModules = {
    'missing-asset-registry-path': __dirname + '/node_modules/expo-asset',
  };

  return config;
};
