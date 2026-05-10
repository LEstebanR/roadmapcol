Complete end-to-end workflow for developing an existing Linear issue: create branch, commit, push, and open a PR — all in one command.

## Arguments

`$ARGUMENTS` — Linear issue number (e.g. `LES-42`). If omitted, ask the user: "Which Linear issue do you want to develop? (e.g. LES-42)"

## Steps

### Setup

1. **Identify the issue**: use `$ARGUMENTS` or ask the user for the issue number.

2. **Fetch the issue details** from Linear:
   - Title, description, label (Feature / Bug / Infrastructure), priority, current status.

3. **Determine branch type** from the issue label:
   - Feature → `feat`
   - Bug → `fix`
   - Infrastructure / tooling → `chore`

4. **Create a git branch** from an up-to-date `develop` — always pull before branching:
   ```
   git checkout develop
   git pull origin develop
   git checkout -b <type>/les-<number>-<short-slug>
   ```
   Slug: lowercase, hyphens, max 5 words derived from the title.
   If there are uncommitted changes on the current branch, stash them first (`git stash`).

5. **Update the Linear issue** status → `In Progress`.

6. **Pause and inform the user**: confirm the branch is ready and ask them to make their changes. Wait for the user to confirm they are done before continuing.

### Ship

7. **Check working tree** — run `git status`. Stage and commit all relevant changes:
   ```
   git add <relevant files>
   git commit -m "<type>: <summary> (<issue-number>)"
   ```
   Commit type must match the branch prefix (`feat` / `fix` / `chore`).

8. **Push** the branch:
   ```
   git push -u origin <branch>
   ```

### Open PR

9. **Collect context** before writing the PR body:
   - Run `git log develop..HEAD --oneline` to list all commits on this branch.
   - Run `git diff develop...HEAD --stat` to see which files changed.

10. **Open the PR** with `gh pr create` targeting `develop`:

    **Title format**: `<type>: <Linear issue title> (<issue-number>)`

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

11. **Update the Linear issue**:
    - Status → `In Review`
    - Add the PR URL as a link on the issue.

12. **Report** the PR URL and Linear issue URL to the user.
