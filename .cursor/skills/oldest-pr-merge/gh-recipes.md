# GitHub CLI recipes for oldest-pr-merge

## Oldest open PR

```bash
gh pr list --state open --limit 100 --json number,title,createdAt,url,headRefName \
  --jq 'sort_by(.createdAt) | .[0]'
```

## Checkout and inspect

```bash
gh pr checkout <N>
gh pr view <N>
gh pr diff <N>
gh pr checks <N>
```

## Comments and reviews

```bash
# Issue-style PR comments
gh api repos/{owner}/{repo}/issues/<N>/comments

# Review comments (inline)
gh api repos/{owner}/{repo}/pulls/<N>/comments

# Reviews summary
gh pr view <N> --comments

# GraphQL: review threads (resolved state)
gh api graphql -f query='
query($owner:String!,$repo:String!,$number:Int!) {
  repository(owner:$owner,name:$repo) {
    pullRequest(number:$number) {
      reviewThreads(first:100) {
        nodes { id isResolved isOutdated path comments(first:20) { nodes { author { login } body url } } }
      }
    }
  }
}' -f owner=OWNER -f repo=REPO -F number=<N>
```

Resolve a thread (GraphQL `resolveReviewThread`) only after posting a reply.

Reply examples:

```bash
# PR conversation comment
gh pr comment <N> --body "Applied the suggestion: …"

# Reply to an inline review comment (use the comment id)
gh api repos/{owner}/{repo}/pulls/<N>/comments -f body="…" -F in_reply_to_id=<COMMENT_ID>
```

Filter bot/Copilot authors carefully (`copilot`, `github-actions`, etc.) but still evaluate their suggestions.

## Merge

```bash
gh pr merge <N> --merge
# or: gh pr merge <N> --squash
```

## Linked issues

```bash
gh pr view <N> --json body,closingIssuesReferences
gh issue comment <ISSUE> --body "Shipped in #<N>: …"
gh issue close <ISSUE> --reason completed
```
