Complete end-to-end workflow for developing an existing Linear issue: read and implement the issue, create branch, commit, push, and open a PR — all in one command.

## Arguments

`$ARGUMENTS` — Linear issue number (e.g. `LES-42`). If omitted, ask the user: "Which Linear issue do you want to develop? (e.g. LES-42)"

## Steps

### Setup

1. **Identify the issue**: use `$ARGUMENTS` or ask the user for the issue number.

2. **Fetch the issue details** from Linear:
   - Title, description, label (Feature / Bug / Infrastructure), priority, current status.

3. **Determine branch type** from the issue label:
   - Feature / Improvement → `feat`
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

### Develop

6. **Understand the issue fully**: re-read the Linear description, definition of done, and any code snippets it contains. Explore the relevant files in the codebase to understand the current state before writing a single line.

7. **Implement the changes**: write the code needed to satisfy the issue. Follow all project conventions (no semicolons, single quotes, 80-char limit, kebab-case files, sorted keys). Run tests and type-check after implementing:
   ```
   bun test
   bun run type-check
   bun run lint
   ```
   Fix any errors before continuing.

8. **Pause only if blocked**: if requirements are ambiguous or the implementation has non-obvious trade-offs, ask the user one focused question. Otherwise proceed autonomously.

   Once implementation is complete and all checks pass, continue to Ship.

### Ship

9. **Run `/ship-issue`** — follows the full ship-issue skill to stage, commit, and push the branch.

### Open PR

10. **Run `/new-pr`** — follows the full new-pr skill to open a standardized PR targeting `develop`, update the Linear issue to `In Review`, and report the PR URL.
