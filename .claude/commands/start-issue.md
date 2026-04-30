Create a Linear issue and branch ready to start work on a new task.

## Arguments

`$ARGUMENTS` — brief description of the task (e.g. "add contact form to homepage")

## Steps

1. **Determine issue type** from the description:
   - New feature → type `feat`, Linear label `Feature`
   - Bug fix → type `fix`, Linear label `Bug`
   - Infrastructure/tooling → type `chore`, Linear label `Infrastructure`

2. **Create a Linear issue** in the Road Map Col project (team: Lesteban):
   - Title: clear English sentence
   - Priority: 2 (High) for bugs, 3 (Normal) for features/chores
   - Description: problem statement, proposed solution, Definition of Done checklist
   - Assign to `me`

3. **Create a git branch** from `develop`:
   ```
   git checkout develop && git pull origin develop
   git checkout -b <type>/les-<number>-<short-slug>
   ```
   Slug: lowercase, hyphens, max 5 words derived from the title.

4. **Confirm** to the user:
   - Linear issue URL and number
   - Branch name now checked out
   - Next step: make changes, then run `/ship-issue`
