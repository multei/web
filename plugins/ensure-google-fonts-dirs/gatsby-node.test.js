const fs = require("fs")
const path = require("path")
const os = require("os")

const { onPreBootstrap } = require(".")

describe("ensure-google-fonts-dirs plugin", () => {
  it("creates .cache/google-fonts/fonts and public/google-fonts", () => {
    const cwd = process.cwd()
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "ensure-fonts-"))
    process.chdir(tmp)

    try {
      onPreBootstrap()
      expect(fs.existsSync(path.join(tmp, ".cache/google-fonts/fonts"))).toBe(
        true
      )
      expect(fs.existsSync(path.join(tmp, "public/google-fonts"))).toBe(true)
    } finally {
      process.chdir(cwd)
      fs.rmSync(tmp, { recursive: true, force: true })
    }
  })
})
