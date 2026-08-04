# Contributing Guide — Cohort 3

1. Fork this repo to your personal GitHub account.
2. Create a branch named `week-{N}-{your-github-handle}`, e.g. `week-1-scotch`.
3. Build that week's deliverable on the branch — don't touch `main`.
4. Open a pull request from your branch to your fork's `main` branch.
5. PR title format: `[Cohort 3 · Week N] Your Name — Deliverable title`.
6. Fill in the PR template completely: what you built, what works, what
   doesn't, and your public URL or Fuji deployment link if relevant.
7. Post the PR link in Discord `#submissions` before Sunday midnight EAT.

## Code style

- Use `async/await`, not `.then()` chains.
- Every tool call and API call gets a `try/catch`.
- No API keys in code — `.env` only, and `.env` is git-ignored.
- Comment the *why*, not the *what* — the code should already say what it does.

## Getting unblocked

Post in Whatsapp `#MiniHack Cohort 3` first. Tag the Technical Lead only if
you've been stuck for more than 30 minutes.
