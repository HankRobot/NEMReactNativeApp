const extraNodeModules = {
  crypto: require.resolve('react-native-crypto'),
  fs: require.resolve('react-native-fs'),
  http: require.resolve('stream-http'),
  https: require.resolve('https-browserify'),
  process: require.resolve('process/browser.js'),
  stream: require.resolve('readable-stream'),
  tls: require.resolve('tls-browserify'),
  net: require.resolve('net-browserify'),
  util: require.resolve('util'),
  punycode: require.resolve('punycode/'),
  url: require.resolve('react-native-url'),
  querystring: require.resolve('querystring-es3/'),
  zlib: require.resolve('react-zlib-js'),
  path: require.resolve('react-native-path'),
  vm: require.resolve('vm-browserify'),
};

module.exports = {
  resolver: {
    extraNodeModules,
  },
};