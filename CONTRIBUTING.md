# Contributing

## Commits

Use **progressive, atomic commits**:

- Each commit should be a single logical change.
- Every commit must leave the tree in a **green, cherry-pickable state**: if that commit alone is applied on top of the default branch, install/build/test (and CI) should still pass.
- Do not mix unrelated refactors, formatting-only noise, or half-finished work into the same commit.
- Prefer a sequence of small commits over one large “dump” commit.

### Messages

- Write commit messages in **English**.
- Follow [Conventional Commits](https://www.conventionalcommits.org/):

```text
<type>(optional-scope): <short summary>

[optional body]

[optional footer]
```

Common types: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `ci`, `build`, `perf`, `style`.

Examples:

```text
docs: document default branch rename to main
fix(hooks): return success payload from steps navigation mock
test: refresh copyright year snapshots
```

Reference related GitHub issues in the subject or footer when applicable (e.g. `#417`).

## Issues

When you **implement** a GitHub issue:

1. Read the full issue body (context, scope checklists, acceptance criteria, notes) before and during the work.
2. After the implementation finishes, **update the issue** to match reality:
   - Check completed checklist items (`- [x]`).
   - Leave incomplete items unchecked and briefly note what remains.
   - Adjust acceptance criteria the same way.
   - Add a short comment summarizing what shipped and any follow-ups.
3. Only close the issue when acceptance criteria are met, or leave it open (or reopen) if material checklist items are still pending.

## Guidelines & code of conduct

- [Organization contributing guidelines](https://github.com/multei/.github/blob/master/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/multei/.github/blob/master/CODE_OF_CONDUCT.md)
