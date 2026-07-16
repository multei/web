# Troubleshooting instructions

## Something went wrong installing the "sharp" module

Given you run `npm start`, `npm run develop` or `gatsby develop`, when you find this on Terminal:

```
Something went wrong installing the "sharp" module

Module did not self-register.
```

1. Check if you are running Node version 10.13.0 or higher (12.14.1 or higher is recommended);
2. If you are using `nvm`, change to a higher version (e.g. `nvm use 12`);
3. Delete sharp directory with `rm -rf node_modules/sharp/`
4. Call `npm install`;
5. Run `npm start`, `npm run develop` or `gatsby develop`.

## npm ERESOLVE peer dependency conflict on install

Given you run `npm install`, when you find this on Terminal:

```
npm error code ERESOLVE
npm error ERESOLVE could not resolve
...
peer react@"17.0.0" from @hot-loader/react-dom@17.0.0
```

1. Prefer installing with Node 18 (this Gatsby 2 stack is unreliable on Node 26+);
2. Run `npm install --legacy-peer-deps`;
3. If `sharp` still fails afterward, see the sharp / ARM sections below.

## sharp fails on Apple Silicon / darwin-arm64 (missing libvips)

Given you run `npm install`, when you find this on Terminal:

```
ERR! sharp Prebuilt libvips 8.9.1 binaries are not yet available for darwin-arm64v8
...
fatal error: 'vips/vips8' file not found
```

1. Use Node 18 (`export PATH="/opt/homebrew/opt/node@18/bin:$PATH"` or equivalent);
2. Install system libvips: `brew install vips`;
3. Install dependencies with `npm install --legacy-peer-deps --ignore-scripts`;
4. Install a newer sharp that supports ARM, e.g. `npm install sharp@0.32.6 --save-exact --legacy-peer-deps --no-save --foreground-scripts`;
5. Ensure nested Gatsby plugins resolve a compatible `detect-libc@2` (sharp 0.32 needs `isNonGlibcLinuxSync`). If you see `detectLibc.isNonGlibcLinuxSync is not a function`, install/copy `detect-libc@2.1.0` into the nested `sharp` trees under `gatsby-plugin-sharp`, `gatsby-transformer-sharp`, and `gatsby-plugin-manifest`;
6. Run with Node 18: `npm start` / `npm run develop`.

## OpenSSL error:0308010C digital envelope routines unsupported

Given you run `gatsby develop` on Node 17+, when you find this on Terminal:

```
error:0308010C:digital envelope routines::unsupported
```

1. Use Node 18 (or another supported LTS for this repo’s era);
2. Export the legacy OpenSSL provider before starting the app:

```sh
export NODE_OPTIONS=--openssl-legacy-provider
npm run develop
```

## gatsby-plugin-prefetch-google-fonts ENOENT (cache/public fonts)

Given you run `gatsby develop`, when you find this on Terminal:

```
error "gatsby-plugin-prefetch-google-fonts" threw an error while running the onPreBootstrap lifecycle:
ENOENT: no such file or directory, stat '.cache/google-fonts//fonts'
```

and/or:

```
Error: ENOENT: no such file or directory, scandir '.../public/google-fonts'
```

1. Create the expected directories before (or after) a clean — preferably via the local plugin `plugins/ensure-google-fonts-dirs` (registered first in `config/plugins`) which runs `onPreInit` / `onPreBootstrap`:

```sh
mkdir -p .cache/google-fonts/fonts public/google-fonts
```

2. If `gatsby clean` removed them, recreate the directories and restart `npm run develop`;
3. Note: the plugin may still fail to download fonts (CSS without `src` URLs). Empty directories unblock local develop; consider replacing this plugin (e.g. `next/font` after the Next.js migration).

## Jest snapshot year mismatch (Footer / Copyright / Layout)

Given you run `npm test` or a pre-push hook, when snapshots fail because the copyright year advanced (e.g. `2020` → `2026`):

1. Update snapshots: `npm test -- -u`;
2. Commit the updated `__snapshots__` files.

## useStepsNavigation test crashes (handleNext returns undefined)

Given you run `npm test`, when `useStepsNavigation.test.js` fails with:

```
TypeError: Cannot destructure property 'success' of ... as it is undefined.
```

or Jest reports `Call retries were exceeded` for that suite:

1. Ensure the step `handleNext` mock resolves to `{ success: true, newParkingReportState: {} }` (not a bare `async () => {}`);
2. Prefer `await handleNext()` in the async test case;
3. Re-run `npm test`.

## Lighthouse workflow fails on deprecated actions/upload-artifact@v2

Given the **Lighthouse** GitHub Actions workflow fails immediately at “Set up job” with:

```
This request has been automatically failed because it uses a deprecated version of
`actions/upload-artifact: v2`
```

1. In `.github/workflows/lighthouse.yml`, bump `actions/upload-artifact` to a supported major (e.g. `@v4`);
2. Also refresh related actions (`actions/checkout`, `treosh/lighthouse-ci-action`) if they are outdated;
3. Push and confirm “Set up job” succeeds.

## Lighthouse LHCI collect fails with CHROME_INTERSTITIAL_ERROR

Given the Lighthouse job passes setup but fails on “Audit URLs using Lighthouse” with:

```
Runtime error encountered: Chrome prevented page load with an interstitial.
...
LHCI 'collect' has encountered a problem.
```

1. Open the audited URL (currently `https://multei.com.br`) in a clean browser / Chrome and check for SSL, DNS, or interstitial warning pages;
2. Fix the production site response so Chrome can load the page without an interstitial;
3. Re-run the Lighthouse workflow;
4. This is separate from deprecated Action upgrades (see #418).
5. While production is down, the Lighthouse workflow is limited to `workflow_dispatch` only (no `push`). Re-enable automatic runs via #419 when the site is healthy again.

## Renovate “Artifact update problem” on dependency PRs

Given a Renovate PR comments that it failed to update an artifact and you should not merge as-is:

1. Check out the PR branch and merge/rebase latest `main`;
2. Use Node 18: `export PATH="/opt/homebrew/opt/node@18/bin:$PATH"`;
3. Run `npm install --legacy-peer-deps` and commit the regenerated `package-lock.json`;
4. Run `npm test` (and push so CI runs);
5. Reply on the PR that the lockfile was regenerated and tests/CI pass.

## Browserslist: caniuse-lite is outdated

Given build/dev tooling prints:

```
Browserslist: caniuse-lite is outdated. Please run:
  npx browserslist@latest --update-db
```

1. Prefer the current updater: `npx update-browserslist-db@latest`;
2. If that fails with `ERESOLVE` / peer dependency conflicts (common with `@hot-loader/react-dom` vs `react@17.0.1`), install manually:

```sh
npm install caniuse-lite baseline-browser-mapping --legacy-peer-deps
npx update-browserslist-db@latest
```

3. Commit the regenerated `package-lock.json`; commit `package.json` too only when the manual install path added or updated direct package entries;
4. Confirm `npx update-browserslist-db@latest` reports `caniuse-lite is up to date`.

## Cypress 15+ requires Node 20 (keep Cypress <=14 on Node 18 CI)

Given Renovate opens a Cypress major that resolves to 15.x while CI uses Node 18:

```
npm warn EBADENGINE Unsupported engine {
  package: 'cypress@15.x.x',
  required: { node: '^20.1.0 || ^22.0.0 || >=24.0.0' },
  current: { node: 'v18.20.8', ... }
}
```

1. Do **not** merge Cypress 15+ until CI/dev Node is upgraded to 20+;
2. Cap the bump at the latest Cypress 14.x (e.g. `14.5.4`) which still supports Node 18;
3. Regenerate the lockfile with `npm install --legacy-peer-deps` and run `npm test`.

## log4js CVE-2022-21704 (transitive via @stryker-mutator/core)

Given Renovate opens a security PR to bump `log4js` to `6.4.0+` but `@stryker-mutator/core@4.x` still declares `log4js@~6.2.1`:

1. Keep current `main` `package.json` (do not take the abandoned Renovate branch's full dependency set);
2. Add an npm override instead of a Stryker major bump:

```json
"overrides": {
  "log4js": "6.4.0"
}
```

3. Regenerate the lockfile with `npm install --legacy-peer-deps` and confirm `node_modules/log4js` resolves to `6.4.0`;
4. Run `npm test` before merge.

## Something is already running at port 8001

Given you run `npm run dev` / `npm run develop` / `gatsby develop`, when you find this on Terminal:

```
Something is already running at port 8001
```

1. Confirm what is listening:

```sh
lsof -iTCP:8001 -sTCP:LISTEN -n -P
```

2. If it is a leftover Gatsby from this repo, stop it (replace `<PID>`):

```sh
kill <PID>
# if it does not exit: kill -9 <PID>
```

3. Or stop every local Gatsby develop:

```sh
pkill -f "gatsby develop" || true
```

4. Restart with Node 18 (see also the localStorage warning below):

```sh
export PATH="/opt/homebrew/opt/node@18/bin:$PATH"
npm run develop
```

5. To use another port temporarily: `gatsby develop --host localhost --port 8002` (update Cypress `baseUrl` if you run e2e against it).

## ExperimentalWarning: localStorage / --localstorage-file (Node 25+)

Given you run `npm run develop` (often right after the port-8001 message) and see:

```
(node:…) ExperimentalWarning: localStorage is not available because --localstorage-file was not provided.
(Use `node --trace-warnings ...` to show where the warning was created)
```

1. This comes from **Node 25+ / 26** experimental Web Storage (`globalThis.localStorage`), not from browser `window.localStorage` in the app;
2. Homebrew’s default `node` may be 26.x while this Gatsby 2 stack expects **Node 18** — check with `node -v` and `which node`;
3. Prefer Node 18 for install/dev/test/CI:

```sh
export PATH="/opt/homebrew/opt/node@18/bin:$PATH"
node -v   # expect v18.x
npm run develop
```

4. If you must stay on Node 25+, you can silence Web Storage with `NODE_OPTIONS=--no-webstorage` (or provide `--localstorage-file=…`). Prefer switching to Node 18 instead of papering over it on this repo;
5. Separately keep using `NODE_OPTIONS=--openssl-legacy-provider` when OpenSSL errors appear (see the OpenSSL section above). Combine carefully, e.g. `export NODE_OPTIONS="--openssl-legacy-provider --no-webstorage"`.

## Jest PropTypes: EmbedGoogleMap boolean `className`

Given `npm test` prints:

```
Warning: Failed prop type: Invalid prop `className` of type `boolean` supplied to `Styled(MuiBox)`, expected `string`.
    at Iframe (…/muy/dist/index.cjs.js)
    at EmbedGoogleMap (src/containers/EmbedGoogleMap/…)
```

1. Cause: `muy@1.1.0` `Iframe` sets `className: variant === "cover" && classes.cover`, which is `false` when `variant` is not `"cover"`;
2. Consumer workaround: local `src/containers/EmbedGoogleMap` implementation (string-safe `className`) — shipped in #440 / #443;
3. Upstream fix: [muy/muy#152](https://github.com/muy/muy/issues/152) / [muy/muy#153](https://github.com/muy/muy/pull/153) (`clsx` on `Iframe`, same pattern as `Image`);
4. After a published `muy` release with that fix, prefer bumping `muy` and simplifying the local container if it is only a re-export again;
5. If the warning returns, ensure related unit tests still assert no boolean-`className` warning.

## Jest PropTypes / ref: Footer MUI Link + Gatsby Link mock

Given `npm test` prints one or more of:

```
Warning: Failed prop type: Invalid prop `component` supplied to `ForwardRef(Link)`. Expected an element type that can hold a ref.
Warning: mockConstructor: `ref` is not a prop. …
Warning: Function components cannot be given refs. …
    at __mocks__/gatsby.js
    at Footer (src/components/Footer/…)
```

1. Cause: `__mocks__/gatsby.js` implemented `Link` as a plain `jest.fn()` and destructured `ref` from props; MUI `Link` requires a ref-capable `component`;
2. Fix: mock `Link` with `React.forwardRef` (production Gatsby `Link` already does) — shipped in #441 / #442;
3. Regression coverage lives in `src/components/Footer/index.test.js`.

## npm warn deprecated … on install (inventory)

Given `npm install` / `npm ci` floods the terminal with `npm warn deprecated …` (e.g. `urix`, `request`, `gatsby-image`, `netlify-cli` transitive packages, `popper.js`, `@hapi/joi`, …):

1. Do **not** silence with npm loglevel flags — almost all warnings come from a few **root** packages;
2. Follow the inventory and remediations in #445:
   - #446 — remove unused direct `gatsby-image` (quick win)
   - #447 / #416 — upgrade or remove `netlify-cli` (largest install-noise cluster)
   - #448 / #415 — clear Gatsby 2 / webpack 4 transitive deprecations (upgrade Gatsby majors or migrate to Next.js)
   - #449 — upgrade Jest past 26 (drops `request` / `har-validator` via jsdom)
   - #436 — Material UI v4 → MUI v5 (drops `popper.js@1`)
3. Prefer fixing/removing those roots over adding an `override` per leaf package;
4. Keep using Node 18 + `npm install --legacy-peer-deps` for this stack.

## Jest PropTypes: SEO required `description` undefined

Given the browser console shows:

```
Warning: Failed prop type: The prop `description` is marked as required in `SEO`, but its value is `undefined`.
    at SEO (…/metax/…)
    at SEO (src/components/SEO/…)
    at IndexTemplate (src/templates/index.js)
```

1. Ensure `src/components/SEO` defaults `description` (and `title`) from `useSiteMetadata()` when omitted;
2. Prefer page-specific `description` on important routes (e.g. home `IndexTemplate`);
3. Upstream: [muy/muy#154](https://github.com/muy/muy/issues/154) / PR for `metax` `mergeProps` fallback;
4. See #455.

## Gatsby HMR eslint-loader: unused vars / anonymous page exports

Given the browser console (or terminal) shows eslint-loader module warnings such as:

```
'Skeleton' is defined but never used  no-unused-vars
Anonymous arrow functions cause Fast Refresh to not preserve local component state.
  no-anonymous-exports-page-templates
```

1. Remove unused imports (and dead commented-out usage) — e.g. `Skeleton` in `LocationStep` when only referenced inside comments;
2. Name page default exports like `src/pages/index.js` (`const NamedPage = () => …; export default NamedPage`);
3. Re-run / hard-refresh `gatsby develop` so eslint-loader clears the warnings;
4. See #453.

## Gatsby HMR: bundle has N errors / ENOENT in node_modules

Given the browser console (with `gatsby develop` running) shows:

```
[HMR] connected
[HMR] bundle has 26 errors
Module build failed: Error: ENOENT: no such file or directory, open '…/node_modules/…'
```

for paths such as `@hot-loader/react-dom/node_modules/scheduler/…`, `axios/lib/defaults.js`, `gatsby-link/index.js`, or `gatsby/node_modules/@babel/runtime/helpers/…`:

1. Stop every local Gatsby process:

```sh
pkill -f "gatsby develop" || true
```

2. Wipe install artifacts and reinstall on **Node 18**:

```sh
export PATH="/opt/homebrew/opt/node@18/bin:$PATH"
export NODE_OPTIONS=--openssl-legacy-provider
rm -rf node_modules .cache
npm install --legacy-peer-deps --ignore-scripts
```

3. On Apple Silicon, restore a working `sharp` (see the sharp / ARM section above), e.g.:

```sh
npm install sharp@0.32.6 --save-exact --legacy-peer-deps --no-save --foreground-scripts
```

4. Recreate font cache dirs, then start develop:

```sh
mkdir -p .cache/google-fonts/fonts public/google-fonts
npm run develop
```

5. Hard-refresh the browser (or close the tab) so HMR is not stuck on the old broken module graph.

6. If webpack fails with `Can't resolve 'gatsby-link'` / `gatsby-react-router-scroll` from `.cache`, keep those packages as **direct** dependencies matching the nested Gatsby 2 versions (`gatsby-link@2.11.0`, `gatsby-react-router-scroll@3.7.0`) so npm hoists them for the develop SSR bundle.
7. If `gatsby-recipes` crashes with `Error [ERR_REQUIRE_ESM]` for `remark-mdx`, keep the npm override `"remark-mdx": "1.6.22"` in `package.json` (CJS-compatible) and re-run `npm install --legacy-peer-deps`. See #451.

Do **not** leave `gatsby develop` running while deleting or partially rewriting `node_modules` — that is the usual way this ENOENT storm starts.


## npm install fails downloading Cypress binary (ENOTFOUND download.cypress.io)

Given dependency install fails in restricted/offline environments:

```sh
npm install --legacy-peer-deps
# ...
# The Cypress App could not be downloaded.
# URL: https://download.cypress.io/desktop/14.5.4?platform=linux&arch=x64
# Error: getaddrinfo ENOTFOUND download.cypress.io
```

1. Re-run install without lifecycle scripts so Cypress binary download is skipped:

```sh
npm install --legacy-peer-deps --ignore-scripts
```

2. Run unit tests/build that do not require Cypress binary;
3. If you need E2E locally, run install again in a network with access to `download.cypress.io`.

## Next.js build fails with `App Router and Pages Router both match path`

Given `next build` reports route conflicts like:

```txt
App Router and Pages Router both match path: /
```

1. Keep App Router entries under `src/app`;
2. Remove or relocate legacy `src/pages` routes that mirror the same paths;
3. Re-run `npm run build`.
