/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '.next',
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    // SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: false,
            svgoConfig: {
              plugins: [
                {
                  name: 'prefixIds',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;