Create a GitHub issue and branch ready to start work on a new task.

## Arguments

`$ARGUMENTS` — brief description of the task (e.g. "add contact form to homepage")

## Steps

1. **Determine issue type** from the description:
   - New feature → type `feat`, GitHub label `enhancement`
   - Bug fix → type `fix`, GitHub label `bug`
   - Infrastructure/tooling → type `chore`, GitHub label `tech-debt`

2. **Create a GitHub issue** in `LEstebanR/roadmapcol`:
   ```
   gh issue create --title "<clear English title>" --label "<type-label>" --label "priority:<level>" --body "<problem statement, proposed solution, Definition of Done checklist>" --assignee @me
   ```
   Priority: `priority:high` for bugs, `priority:normal` for features/chores.

3. **Create a git branch** from an up-to-date `develop` — always pull before branching:
   ```
   git checkout develop
   git pull origin develop
   git checkout -b <type>/<issue-number>-<short-slug>
   ```
   Slug: lowercase, hyphens, max 5 words derived from the title.
   If there are uncommitted changes on the current branch, stash them first (`git stash`).

4. **Confirm** to the user:
   - GitHub issue URL and number
   - Branch name now checked out
   - Next step: make changes, then run `/ship-issue`
