//const UnoCSS = require("@unocss/webpack").default;

export default {
  webpack: (config) => {
    // config.plugins.push(UnoCSS());
    // config.optimization.realContentHash = true;
    // config.experimental = { ...config.experimental, esmExternals: "loose" };
    // config.transpilePackages = ["@earthling-ui/components"];
    return config;
  },
};
