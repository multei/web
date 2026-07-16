const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias.gatsby = path.resolve(
      __dirname,
      "src/framework/gatsby-shim.js"
    )

    return config
  },
}

module.exports = nextConfig
