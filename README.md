# How to contribute to this repository (Pull Request workflow)
You must not push directly to `main`. All changes must go through a Pull Request.

## 1. Clone the repository (only once)
If you don’t have the project locally yet:
`git clone https://github.com/OWNER/REPO_NAME.git`
`cd REPO_NAME`
Replace `OWNER` and `REPO_NAME` with the real values.

## 2. Make sure you are on main and up to date
Before creating a new branch:
`git switch main`
`git pull origin main`

## 3. Create a new branch for your change
Create a branch with a descriptive name:
`git checkout -b feature/short-description`

Examples:
`feature/login-form`
`fix/navbar-bug`
`refactor/api-calls`

## 4. Make your changes
Edit the files you need.
When ready, check what changed:

`git status`

## 5. Commit your changes
Add and commit your work:

`git add .`
`git commit -m "Clear description of what you changed"`

Example:
`git commit -m "Add validation to login form"`

## 6. Push your branch to GitHub
Push your branch, not main:

`git push origin feature/short-description`

## 7. Open a Pull Request on GitHub

- Go to the repository on GitHub
- You will see a message suggesting to open a Pull Request
(or click Pull Requests → New Pull Request)
- Set: Base branch: main
- Compare branch: your branch
- Add a clear title and description
- Click Create Pull Request

## 8. Wait for review
**Do not merge the PR yourself**

**The owner will:**
- Review the code
- Leave comments or request changes
- Approve and merge when ready

**If changes are requested:**
- Make the fixes on the same branch
- Commit and push again
- The PR updates automatically

### **Important rules**
- **Never push directly to main**
- **Always work on a branch**
- **One Pull Request per change or feature**
- **Ask questions in the Pull Request comments if unsure**

---

FONTS USED
    - For the body we are using -> Montserrat
    - Titles -> Linux Libertine
    - Other -> Sabon Next, Tai Heritage
