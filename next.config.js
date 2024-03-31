/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx", "mdx"],
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  trailingSlash: true,
  output: "export",
};

const withMDX = require("@next/mdx")({
  options: {
    extension: /\.mdx?$/,
    providerImportSource: "@mdx-js/react",
  },
});
module.exports = withMDX(nextConfig);
