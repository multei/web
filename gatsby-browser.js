/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import { wrapWithProvider } from "./src/recoil/wrapWithProvider"
export const wrapRootElement = wrapWithProvider
