# Multei web app

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-9-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

![End-to-end tests](https://github.com/multei/web/workflows/End-to-end%20tests/badge.svg)

## 🚀 Quick start

### Start developing

1. Navigate into root directory;
2. Run `npm install --legacy-peer-deps --ignore-scripts` (keeps local setup resilient when Cypress binary download is blocked);
3. Run `npm start`. Site will open at `http://localhost:8001`.
4. Build for production with `npm run build`.
5. Run tests with `npm test`.
6. The application now runs on Next.js App Router (`src/app`) while preserving framework-agnostic UI templates in `src/templates`, so future migrations (Gatsby/Next/Remix) stay incremental.
7. Open the source code and start editing!
   Save your changes and the browser will update in real time!

## How to contribute?

### Check our [project board](https://github.com/orgs/multei/projects/1)

You can find it at https://github.com/orgs/multei/projects/1

The default branch is **`main`**. If your local clone still tracks `master`, update it:

```sh
git fetch origin
git checkout main
git branch -u origin/main main
git remote set-head origin -a
git branch -d master # optional, after switching
```

## Check our guidelines & code of conduct

- [Contributing Guidelines](./CONTRIBUTING.md) (this repo)
- [Organization contributing guidelines](https://github.com/multei/.github/blob/master/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/multei/.github/blob/master/CODE_OF_CONDUCT.md).

### Meet our contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/thomazmz"><img src="https://avatars3.githubusercontent.com/u/16430263?v=4" width="100px;" alt=""/><br /><sub><b>Thomaz Zandonotto</b></sub></a><br /><a href="https://github.com/multei/web/commits?author=thomazmz" title="Code">💻</a> <a href="#maintenance-thomazmz" title="Maintenance">🚧</a> <a href="#projectManagement-thomazmz" title="Project Management">📆</a></td>
    <td align="center"><a href="http://www.ruanvictor.dev"><img src="https://avatars2.githubusercontent.com/u/13110218?v=4" width="100px;" alt=""/><br /><sub><b>Ruan Victor</b></sub></a><br /><a href="https://github.com/multei/web/commits?author=ruandev" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/adalbertomaia"><img src="https://avatars0.githubusercontent.com/u/23324060?v=4" width="100px;" alt=""/><br /><sub><b>Adalberto Maia</b></sub></a><br /><a href="https://github.com/multei/web/commits?author=adalbertomaia" title="Code">💻</a> <a href="https://github.com/multei/web/issues?q=author%3Aadalbertomaia" title="Bug reports">🐛</a> <a href="#a11y-adalbertomaia" title="Accessibility">️️️️♿️</a></td>
    <td align="center"><a href="http://jimmyandrade.com"><img src="https://avatars3.githubusercontent.com/u/2307245?v=4" width="100px;" alt=""/><br /><sub><b>Jimmy Andrade</b></sub></a><br /><a href="https://github.com/multei/web/commits?author=jimmyandrade" title="Code">💻</a> <a href="https://github.com/multei/web/commits?author=jimmyandrade" title="Documentation">📖</a> <a href="https://github.com/multei/web/issues?q=author%3Ajimmyandrade" title="Bug reports">🐛</a> <a href="#a11y-jimmyandrade" title="Accessibility">️️️️♿️</a></td>
    <td align="center"><a href="https://github.com/heitorbffi"><img src="https://avatars2.githubusercontent.com/u/44254995?v=4" width="100px;" alt=""/><br /><sub><b>Heitor B. F. Fernandes Inhaquites</b></sub></a><br /><a href="#maintenance-heitorbffi" title="Maintenance">🚧</a> <a href="#projectManagement-heitorbffi" title="Project Management">📆</a></td>
    <td align="center"><a href="http://tuliooassis.github.io"><img src="https://avatars1.githubusercontent.com/u/17442350?v=4" width="100px;" alt=""/><br /><sub><b>Túlio Assis</b></sub></a><br /><a href="https://github.com/multei/web/commits?author=tuliooassis" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/lemenezes"><img src="https://avatars3.githubusercontent.com/u/8173652?v=4" width="100px;" alt=""/><br /><sub><b>Leandro Menezes Miglioli</b></sub></a><br /><a href="https://github.com/multei/web/commits?author=lemenezes" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/carlamartinezribeiro"><img src="https://avatars2.githubusercontent.com/u/51760937?v=4" width="100px;" alt=""/><br /><sub><b>carlamartinezribeiro</b></sub></a><br /><a href="#ideas-carlamartinezribeiro" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/hpsmatheus"><img src="https://avatars2.githubusercontent.com/u/29740936?v=4" width="100px;" alt=""/><br /><sub><b>hpsmatheus</b></sub></a><br /><a href="https://github.com/multei/web/issues?q=author%3Ahpsmatheus" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## 🧐 What's inside?

A quick look at the top-level files and directories in this Next.js project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── next.config.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`next.config.js`**: Next.js build/runtime configuration.
6.  **`src/app`**: App Router entries (`layout`, route pages, metadata routes).
7.  **`src/templates`**: Framework-agnostic page templates reused independently from routing framework.
8.  **`src/framework`**: Thin routing/runtime adapters that isolate framework specifics.
9.  **`LICENSE`**: This project is licensed under the MIT license.
10. **`package-lock.json`**: Auto-generated lockfile for exact dependency versions.
11. **`package.json`**: Project metadata and npm scripts/dependencies.
12. **`README.md`**: Project documentation.
