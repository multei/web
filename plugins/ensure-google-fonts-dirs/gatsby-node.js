const fs = require("fs")

const ensureDirs = () => {
  fs.mkdirSync(".cache/google-fonts/fonts", { recursive: true })
  fs.mkdirSync("public/google-fonts", { recursive: true })
}

// Runs before later plugins' onPreBootstrap (including prefetch-google-fonts).
exports.onPreBootstrap = ensureDirs
exports.onPreInit = ensureDirs
