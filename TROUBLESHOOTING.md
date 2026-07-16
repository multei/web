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

1. Create the expected directories before (or after) a clean:

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

3. Commit the resulting `package.json` / `package-lock.json` changes;
4. Confirm `npx update-browserslist-db@latest` reports `caniuse-lite is up to date`.
