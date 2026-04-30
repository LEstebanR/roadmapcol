Open a pull request for the current branch targeting `develop`.

## Arguments

`$ARGUMENTS` — Linear issue number (e.g. `LES-42`). If omitted, infer from the current branch name.

## Steps

1. **Infer the issue number** from `$ARGUMENTS` or the branch name (`feat/les-42-*` → `LES-42`).

2. **Verify the branch is pushed**:
   ```
   git status
   git push -u origin <branch>   # if not yet pushed
   ```

3. **Fetch the Linear issue title** to use in the PR title.

4. **Open the PR** with `gh pr create` targeting `develop`:
   - Title: `<type>: <Linear issue title> (<issue-number>)`
   - Body:
     ```
     ## Summary
     - <bullet points of what changed>

     ## Test plan
     - [ ] <verification steps>

     Linear: <issue-url>
     ```
   - Never target `main` directly.

5. **Update the Linear issue**:
   - Status → `In Review`
   - Add the PR URL as a link on the issue.

6. **Report** the PR URL and Linear issue URL to the user.
