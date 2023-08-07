/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    // Defaults to 50MB
    isrMemoryCacheSize: 0,
  },
};
