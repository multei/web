# Agent instructions

## Commits

Always use **progressive, atomic commits** (see `CONTRIBUTING.md`):

1. One logical change per commit.
2. Every commit must leave the project **green and cherry-pickable** — install/build/test (and CI) should pass if that commit alone is applied on the default branch.
3. Do not mix unrelated work or land half-finished changes that break the pipeline mid-series.
4. Prefer a sequence of small commits over one large commit.
5. Commit messages in **English**, using [Conventional Commits](https://www.conventionalcommits.org/) (`feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `ci`, …).

## Pull requests

- Always **squash merge** PRs: `gh pr merge <N> --squash`.
- Do not use `--merge` or `--rebase` unless a maintainer explicitly asks for an exception.
- Prefer an English Conventional Commits subject for the squash commit message.
- Before merge: assign **`cursoragent`** when assignable, otherwise **`jimmyandrade`**, and ensure **at least one meaningful label**. Never merge without both.

## Issues

- Create and edit GitHub issues **in English** (title and body). Do not open new issues in Portuguese.
- Prefer Conventional Commit-style titles when helpful (`ci: …`, `docs: …`, `feat: …`).

When implementing a GitHub issue, always:

1. Read the full issue (scope checklists, acceptance criteria, notes) before coding.
2. After implementation finishes, **update the issue body**:
   - Mark completed items with `- [x]`.
   - Leave unfinished items unchecked and note what is still pending.
   - Mirror the same for acceptance criteria.
3. Comment with a short summary of what shipped and follow-ups (English).
4. Close only when acceptance criteria are satisfied; otherwise leave open (or reopen) with remaining items clear.

## Troubleshooting

Whenever you encounter an error while installing, building, developing, testing, or deploying this project:

1. Check `TROUBLESHOOTING.md` for an existing entry first.
2. If the error is **new**, add a section to `TROUBLESHOOTING.md` following the same format as the existing entries:
   - A short heading describing the failure
   - When/how it appears (command + terminal excerpt)
   - Numbered recovery steps that worked (or the best known workaround)
3. Prefer documenting durable fixes over one-off environment hacks, but record workarounds when that is all that unblocks the task.
4. Do this in the same session you hit the error — do not wait to be asked.

## Dependency / Renovate PRs

- For dependency-only PRs (especially Renovate), regenerate `package-lock.json` with **Node 18** and `npm install --legacy-peer-deps` when Renovate reports an artifact update problem.
- Keep GitHub Actions Node CI on **Node 18** (not 10/12) for this stack; use `npm ci --legacy-peer-deps`.
- Dependency bumps with no application source changes usually do not need new unit tests; still run the full existing suite before merge.
