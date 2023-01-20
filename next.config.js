const path = require('path');
const withInterceptStdout = require('next-intercept-stdout');

module.exports = withInterceptStdout({
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.resolve(__dirname, 'src/application/styles'),
    };
    return config;
  },
}, (text) => (text.includes('Duplicate atom key') ? '' : text));
