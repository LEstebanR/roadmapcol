Review the current session and update CLAUDE.md and skills to reflect new patterns, conventions, or workflows discovered. Commits and pushes directly to `develop`.

## Steps

### Review

1. **Scan the session** for anything that changed, was corrected, or emerged as a pattern:
   - New files, routes, or architecture decisions
   - Conventions that were applied and aren't in CLAUDE.md
   - Skill gaps: steps that were awkward, missing, or had to be worked around
   - Issues that caused friction (e.g. SSH, test environment, lint rules)
   - Feedback the user gave about skill behavior (too verbose, missing a step, wrong order)

2. **Read the current state** of the files you intend to modify before touching them:
   - `CLAUDE.md`
   - Any `.claude/commands/*.md` files relevant to the session

### Update

3. **Update `CLAUDE.md`** only if any of these changed:
   - A new page/route was added or removed
   - A new data file, integration, or dependency was introduced
   - A build/test/lint command changed
   - A new architectural pattern emerged that isn't documented
   - The skills section is out of date (missing or renamed skills)
   Keep it concise — remove outdated info rather than appending.

4. **Update skills** (`.claude/commands/*.md`) if any of these apply:
   - A step was missing and had to be done manually
   - A step's output or behavior was wrong and the user corrected it
   - A new skill should reference another skill instead of duplicating steps
   - The skill description no longer matches what it actually does

5. **Do not change** anything that is still accurate. No cosmetic edits.

### Ship

6. **Check git status** — only stage files that were actually modified:
   ```
   git status
   git add CLAUDE.md .claude/commands/<changed>.md   # only what changed
   ```

7. **Commit directly to `develop`** — verify you are on `develop` before committing:
   ```
   git checkout develop
   git commit -m "chore: retrospective — <one-line summary of what changed>"
   ```

8. **Push to `develop`**:
   ```
   git push origin develop
   ```

9. **Report** to the user: what was updated and why. If nothing needed changing, say so explicitly.
