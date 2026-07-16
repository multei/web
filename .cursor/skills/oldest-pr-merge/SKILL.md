---
name: oldest-pr-merge
description: >-
  Process the oldest open pull request end-to-end: analyze the diff, add missing
  tests on that PR branch, resolve review comments (including Copilot) in a loop,
  fix test regressions, update TROUBLESHOOTING.md / AGENTS.md / ADRs, merge when
  CI is green, then close related issues. Use when the user asks to babysit,
  triage, review, or merge the oldest PR, clear the PR backlog, or run the
  oldest-PR merge workflow.
---

# Oldest PR merge

End-to-end workflow for the **oldest open PR**. Follow project rules in `AGENTS.md` and `CONTRIBUTING.md` (atomic Conventional Commits in English, English issue/PR comments, TROUBLESHOOTING updates).

Copy and track this checklist:

```
Oldest PR progress:
- [ ] 1. Select and analyze oldest open PR
- [ ] 2. Check test coverage for the changes
- [ ] 3. Add missing tests on the same PR branch
- [ ] 4. Resolve all review comments (incl. Copilot) in a loop
- [ ] 5. Run tests and check for regressions
- [ ] 6. Fix regressions if any
- [ ] 7. Record work in TROUBLESHOOTING.md / AGENTS.md (and ADR if needed)
- [ ] 8. Merge only when comments done, tests green, CI green
- [ ] 9. Close related issue(s) with a summary comment
```

## 1. Pick the oldest open PR and analyze it

```bash
gh pr list --state open --limit 100 --json number,title,createdAt,author,url,headRefName,baseRefName,labels,body \
  --jq 'sort_by(.createdAt) | .[0]'
```

Then:

```bash
gh pr view <N> --json title,body,files,commits,statusCheckRollup,reviewDecision,comments,reviews
gh pr diff <N>
```

Checkout the PR branch (`gh pr checkout <N>`). Summarize intent, risk, and touched areas before editing.

If there is no open PR, stop and report that.

## 2. Verify tests cover the changes

From the diff, list behavior that must be tested. Search for existing unit/integration/E2E tests that exercise those paths.

Gaps count as missing coverage (new logic, changed branches, bug fixes without assertions, snapshots that only assert structure when behavior changed).

## 3. If coverage is missing, implement tests on the same PR

- Add tests on the **PR branch** (do not open a separate PR unless the user asks).
- Match existing Jest/Cypress patterns in the repo.
- Commit with atomic Conventional Commits, e.g. `test: cover parking plate validation on wizard step`.
- Push to the PR head branch.

## 4. Review comments loop (including Copilot)

Repeat until **no unresolved review threads / actionable comments remain**:

1. Load comments and threads (see [gh-recipes.md](gh-recipes.md)).
2. Include Copilot / bot review comments; treat them like human review unless clearly noise.
3. For each unresolved item:
   - **Makes sense** → apply the change on the PR branch; record reusable guidance in `AGENTS.md`; reply on the thread explaining what you did; resolve the conversation.
   - **Does not make sense** → reply explaining why (English); record the rationale in `AGENTS.md`; if it is an architectural decision, add or update an ADR under `docs/adr/` (create the folder/template if missing); resolve only after the disagreement is clearly documented on the thread.
4. Push commits, then re-fetch comments (new Copilot rounds may appear). Loop.

Never resolve a thread without a reply that states the outcome.

## 5–6. Regressions

After code/test/comment fixes:

```bash
npm test
# plus any targeted suites for touched files
```

Watch PR checks: `gh pr checks <N>`.

If regressions appear, fix them on the same branch, commit atomically, push, and re-run until local tests and required CI are green. Log novel failures in `TROUBLESHOOTING.md`.

## 7. Documentation updates

Before merge:

- **`TROUBLESHOOTING.md`**: any new install/build/test/CI failure you hit and how you fixed it (same format as existing entries).
- **`AGENTS.md`**: any adopted best practice or rejected-suggestion rationale worth remembering.
- **`docs/adr/`**: only for meaningful architecture decisions (short ADR: context, decision, consequences).

Commit docs separately when possible (`docs: …`).

## 8. Merge when ready

Merge **only if all** are true:

- All review comments answered and resolved
- No known test regressions locally
- PR CI pipeline is green (or only waived checks the user explicitly approved)

```bash
gh pr checks <N>
gh pr merge <N> --merge   # or --squash if the repo standard requires it; prefer preserving atomic commits with --merge when history is clean
```

If merge is blocked (rules, reviews, conflict), report the blocker; do not force-merge unless the user explicitly asks.

## 9. Related issue(s)

Detect linked issues from PR body/commits (`#123`, `Fixes #123`, closing keywords).

```bash
gh pr view <N> --json closingIssuesReferences,body
```

For each associated issue:

1. Comment in **English** with what shipped and the PR URL.
2. Update checklists (`- [x]` / remaining items) per `AGENTS.md`.
3. Close when acceptance criteria are met: `gh issue close <N> --reason completed`.

## Stop / escalate conditions

Stop and ask the user when:

- The oldest PR is draft and not meant to merge
- Changes require product/architecture choice beyond ADRs
- CI failures need secrets/network access you do not have
- Merge requires admin bypass or force push

## Additional resources

- [gh-recipes.md](gh-recipes.md) — GitHub CLI snippets for PRs, comments, and threads
