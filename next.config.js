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
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
}, (text) => (text.includes('Duplicate atom key') ? '' : text));
