# Typescript Template

Consider using [Volta](https://volta.sh/) for NodeJS varsion management.

## What's is it?

This is a [Typescript 4.8](https://www.typescriptlang.org/) project template managed with [Yarn](https://yarnpkg.com/).

Here's what's inside:

- Linting with [ESLint](https://eslint.org/)
- Code formatting with [Prettier](https://prettier.io/)
- Testing with [Jest](https://jestjs.io/)
- Pre-commit hooks with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- Rudimentary GH actions to run CQ and tests

## Usage

Simplest way to copy:

```bash
mkdir new-project
cd new-project

npx degit k-piekarczyk/typescript-template

yarn install
yarn run prepare  # Sets pre-commit hooks. This is optional but recommended.
```

And you're all set up :)
