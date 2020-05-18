/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * @see https://www.gatsbyjs.org/docs/ssr-apis/
 */

import { wrapWithProvider } from "./src/recoil/wrapWithProvider"
export const wrapRootElement = wrapWithProvider
