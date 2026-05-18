Open a pull request for the current branch targeting `develop` with a standardized, clear description.

## Arguments

`$ARGUMENTS` — Linear issue number (e.g. `LES-42`). If omitted, infer from the current branch name.

## Steps

1. **Infer the issue number** from `$ARGUMENTS` or the branch name (`feat/les-42-*` → `LES-42`).

2. **Collect context** before writing the PR:
   - Run `git log develop..HEAD --oneline` to list all commits on this branch.
   - Run `git diff develop...HEAD --stat` to see which files changed.
   - Fetch the Linear issue title, description, and label.

3. **Verify the branch is pushed**:
   ```
   git status
   git push -u origin <branch>   # if not yet pushed
   ```

4. **Open the PR** with `gh pr create` targeting `develop`:

   **Title format**: `<type>: <Linear issue title> (<issue-number>)`
   - `type` must match the branch prefix: `feat` | `fix` | `chore`
   - Example: `feat: Add WhatsApp quote flow to tour detail page (LES-42)`

   **Body template** (fill every section — no empty sections):
   ```
   ## What and why
   <!-- One short paragraph: what problem does this solve and why now. -->

   ## Changes
   <!-- Bullet list of the concrete things that changed. One bullet per logical change.
        Be specific: name the component/file/function, not just "updated X". -->
   - 
   - 

   ## Type of change
   - [ ] Bug fix (non-breaking, fixes an issue)
   - [ ] New feature (non-breaking, adds functionality)
   - [ ] Chore / refactor (no behaviour change)
   - [ ] Breaking change (existing functionality is affected)

   ## Test plan
   <!-- Step-by-step instructions to verify this PR manually. -->
   - [ ] 
   - [ ] Run `bun test` — all tests pass
   - [ ] Run `bun run type-check` — no type errors

   ## Screenshots
   <!-- If there are UI changes, add before/after screenshots. Delete section if not applicable. -->

   ## Notes for reviewer
   <!-- Anything non-obvious: trade-offs, deferred work, known limitations. Delete if none. -->

   ---
   Linear: <issue-url>
   ```

   Rules:
   - Never leave a section with only a comment inside it — either fill it or delete it.
   - Never target `main` directly.
   - Keep bullets concise (< 80 chars each).
   - Screenshots are required for any visible UI change.

5. **Update the Linear issue**:
   - Status → `In Review`
   - Add the PR URL as a link on the issue.

6. **Report** the PR URL and Linear issue URL to the user.
