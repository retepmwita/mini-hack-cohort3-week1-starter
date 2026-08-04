# Commands — Week 1

## Local setup
```bash
git clone https://github.com/<your-username>/mini-hack-cohort3-week1-starter.git
cd mini-hack-cohort3-week1-starter
npm install
cp .env.example .env
```

## Run the chatbot
```bash
npm start
```

## Branch for your submission
```bash
git checkout -b week-1-<your-github-handle>
git add .
git commit -m "Week 1: CLI agent with web search + Avalanche MCP tools"
git push origin week-1-<your-github-handle>
```

## Open your PR
```bash
gh pr create --title "[Cohort 3 · Week 1] <Your Name> — CLI Agent" \
  --body-file .github/PULL_REQUEST_TEMPLATE/week1.md
```
Or open the PR from GitHub's web UI against your fork's `main` branch.
Post the PR link in Discord `#submissions` before Sunday midnight EAT.
