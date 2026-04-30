Commit all pending changes, push the branch, and open a PR to `develop`.

## Arguments

`$ARGUMENTS` — Linear issue number (e.g. `LES-42`). If omitted, infer from the current branch name.

## Steps

1. **Infer issue number** from `$ARGUMENTS` or current branch name (`feat/les-42-*` → `LES-42`).

2. **Check working tree** — run `git status`. If there are unstaged changes, stage and commit them:
   ```
   git add <relevant files>
   git commit -m "<type>: <summary> (<issue-number>)"
   ```
   Commit type must match the branch prefix (`feat`/`fix`/`chore`).

3. **Push** the branch:
   ```
   git push -u origin <branch>
   ```

4. **Open a PR** to `develop` using `gh pr create`:
   - Title: `<type>: <issue title> (<issue-number>)`
   - Body: summary of changes + test plan + Linear issue link
   - Never target `main` directly

5. **Update the Linear issue** status to `In Review` and add the PR URL as a link.

6. **Confirm** to the user: PR URL and Linear issue URL.
