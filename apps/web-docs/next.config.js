const WindiCSS = require("windicss-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  webpack: (config, {}) => {
    //TODO: change to unocss
    config.plugins.push(new WindiCSS());

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: { dimensions: false, typescript: true },
        },
      ],
    });

    return config;
  },
};

const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);
