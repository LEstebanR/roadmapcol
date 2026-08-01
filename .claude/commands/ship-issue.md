Commit all pending changes and push the current branch. Use `/new-pr` afterwards to open the pull request.

## Arguments

`$ARGUMENTS` — GitHub issue number (e.g. `42`). If omitted, infer from the current branch name.

## Steps

1. **Infer issue number** from `$ARGUMENTS` or current branch name (`feat/42-*` → `42`).

2. **Check working tree** — run `git status`. If there are unstaged changes, stage and commit them:
   ```
   git add <relevant files>
   git commit -m "<type>: <summary> (#<issue-number>)"
   ```
   Commit type must match the branch prefix (`feat`/`fix`/`chore`).

3. **Push** the branch:
   ```
   git push -u origin <branch>
   ```

4. **Confirm** to the user: branch is pushed, ready to run `/new-pr`.
