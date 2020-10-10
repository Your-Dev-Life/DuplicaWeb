# Duplica Web Documentation

## Status

[![CodeFactor](https://www.codefactor.io/repository/github/silvamarcel/duplicaweb/badge)](https://www.codefactor.io/repository/github/silvamarcel/duplicaweb)
[![Build Status](https://duplica.semaphoreci.com/badges/DuplicaWeb/branches/WEB-34.svg?style=shields)](https://duplica.semaphoreci.com/projects/DuplicaWeb)
[![codecov](https://codecov.io/gh/silvamarcel/DuplicaWeb/branch/master/graph/badge.svg)](https://codecov.io/gh/silvamarcel/DuplicaWeb)
[![License](https://img.shields.io/github/license/silvamarcel/DuplicaWeb)](https://github.com/silvamarcel/DuplicaWeb/blob/master/LICENSE)

## Table of contents

- [Dependencies](#dependencies)
- [Environment configuration](#environment-configuration)
- [Install](#install)
- [Run](#run)
- [Test](#tests)
- [Deploy](#deploy)
- [Structure of the application](#structure-of-the-application)
- [Deploying to prod](#deploying-to-prod)

# Follow the next steps to Install, Run, Test and Deploy the API.

## Dependencies

- React

## Environment configuration

Create `.env` file in your local environment and add the follow attributes

```
API_BASE_URL=http://localhost:3000
```

## Install

```
npm i
```

## Run

```
npm start
```

## Tests

### Runs all tests like in the CI environment

```
npm test
```

### Runs all tests like in the CI environment and keep watching

```
npm run test:auto
```

### Coverage tests

```
npm run coverage
```

### Lint tests

```
npm run lint
```

## Deploy

It's completely automated and will deploy to staging as soon as the code is merged in the master branch

## Structure of the application

    .
    ├── .github                 # Github templates
    ├── .semaphore              # CI config files
    ├── src                     # Source files
        ├── api                 # API config files
        ├── assets              # Static files and images
        ├── components          # All components
        ├── i18n                # Translation files
        ├── libs                # Library components
        ├── index.js            # Main js file of the application
    ├── tests                   # Supporting test files
    ├── index.html              # Main html file of the application
    └── LICENSE                 # Apache-2.0 License
    ├── package.json            # NPM configuration file
    └── README.md               # This markup file

## Deploying to prod

After staging deploy, in semaphore CI just push the pipeline to prod
