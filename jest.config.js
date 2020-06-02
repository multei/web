module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 33.56,
      functions: 27.27,
      lines: 39.06,
      statements: 38.91,
    },
  },
  globals: {
    __DEV__: true,
    __PATH_PREFIX__: ``,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  setupFiles: ["<rootDir>/loadershim.js"],
  /**
   * Define expect in setup file
   * @see https://github.com/FormidableLabs/enzyme-matchers/issues/86#issuecomment-312489052
   */
  setupFilesAfterEnv: ["<rootDir>/config/jest/setup.js"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
    `cypress`,
  ],
  testURL: `http://localhost:8888`,
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `cypress`],
  verbose: true,
}
