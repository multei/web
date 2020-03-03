/**
 * Implement Gatsby's Node APIs in this file.
 *
 * @see https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}
