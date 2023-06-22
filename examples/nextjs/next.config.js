//const UnoCSS = require("@unocss/webpack").default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // config.plugins.push(UnoCSS());
    // config.optimization.realContentHash = true;
    // config.experimental = { ...config.experimental, esmExternals: "loose" };
    // config.transpilePackages = ["@earthling-ui/components"];
    return config;
  },
};

module.exports = nextConfig;
