#  VS Code Development Environment — Professional Configuration

A well-optimized development environment increases productivity, enhances code quality, and ensures consistency across team members.  
This document highlights the essential Visual Studio Code extensions configured for this project.

---

##  Installed Extensions (Purpose & Value)

| Extension | Publisher | Role in Workflow |
|----------|-----------|-----------------|
| **Prettier – Code Formatter** | Esben Petersen | Enforces consistent formatting automatically on save, maintaining clean and readable code throughout the project lifecycle. |
| **ESLint** | Microsoft | Identifies errors and enforces best coding practices for JavaScript, reducing bugs early in the development phase. |
| **Live Server** | Ritwick Dey | Supports instant browser refresh on code changes, improving UI testing speed and feedback accuracy. |

---

##  Why These Extensions Matter (Key Benefits)

✔ Higher code maintainability  
✔ Reduced debugging time  
✔ Instant UI previews for better development flow  
✔ Team-wide consistency in formatting standards  
✔ Improves overall code reliability and collaboration

---

##  Technical Configuration Applied

The following setup has been committed into `.vscode/settings.json`:

- **Prettier** set as the default formatter
- **Format on Save** enabled for standardized code output
- ESLint actively detects and highlights coding issues

This ensures **any developer** who clones the project automatically receives the exact same configuration — a key requirement in professional team environments.

---

##  Verification Command

You can confirm installed extensions via VS Code CLI:

```bash
code --list-extensions
