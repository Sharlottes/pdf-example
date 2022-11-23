/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(pdf|gif|png|jpe?g|svg)$/,
      type: 'asset/resource'
    });
    config.module.rules.push({
      test: /pdfjs-dist\/build\/pdf\.worker\.js$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[name].[hash][ext]",
      },
    })
    return config;
  }
}

module.exports = nextConfig
