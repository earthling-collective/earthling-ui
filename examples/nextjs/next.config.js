const UnoCSS = require("@unocss/webpack").default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(UnoCSS());
    config.optimization.realContentHash = true;
    return config;
  },
};

module.exports = nextConfig;
