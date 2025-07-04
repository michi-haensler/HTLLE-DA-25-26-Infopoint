# Contributing to da-base-template

Thank you for your interest in contributing to **da-base-template**! We appreciate your time and effort to make this project better. Please read the following guidelines to ensure a smooth contribution process.

---

## Getting Started

1. Fork the repository and clone your fork locally.
2. Ensure all dependencies are installed.

---

## How to Contribute

### Issues

- Before opening a new issue, please check if it already exists in the [issue tracker](https://github.com/bitsneak/HTLLE-DA-Vorlage/issues).
- Provide as much detail as possible and use the issue templates.

### Pull Requests

- Create a feature branch for your work (e.g., `feature/awesome-feature`, `fix/bug-name` or `documentation/fix-typos`).
- Submit your pull request to the `main` (or appropriate) branch.
- Follow the PR Template.
- Include a clear description of the changes you are making.

---

## Commit Messages

All commit messages **must follow the [Conventional Commits](https://conventionalcommits.org) specification**. This ensures a consistent and informative commit history and enables automated versioning and changelogs.

### Issues

If possible [reference the issue](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls#issues-and-pull-requests) in your commit message.

### Format

`<type>[optional scope]: <description>`

`[optional body]`

`[optional footer(s)]`

### Release

Commit messages from certain types automatically trigger new releases when pushed to the main branch.

- Patch → `fix[optional scope]: <description>`
- Minor → `feat[optional scope]: <description>`
- Major → `<type>[optional scope]!: <description>`
- Major → `BREAKING CHANGE: <description>` in footer

---

## Code Style and Testing

- Follow the coding style of this project.
  - No underscores in template relevant file names.
- Ensure all tests pass before submitting a pull request.
- Add or update tests as necessary for your changes.
- Add or update documentation as neccessary four your changes.

---

Thank you for your contributions!
