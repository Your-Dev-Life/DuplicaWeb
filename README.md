# Duplica Web Documentation

## Status
[![CodeFactor](https://www.codefactor.io/repository/github/silvamarcel/duplicaweb/badge)](https://www.codefactor.io/repository/github/silvamarcel/duplicaweb)
![SemaphoreCI](https://duplica.semaphoreci.com/badges/DuplicaWeb.svg)

## Table of contents

* [Dependencies](#dependencies)
* [Install](#install)
* [Run](#run)
* [Test](#tests)
* [Deploy](#deploy)
* [Structure of the application](#structure-of-the-application)
* [Deploying to prod](#deploying-to-prod)

# Follow the next steps to Install, Run, Test and Deploy the API.

## Dependencies

* React

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
        ├── assets              # Static files and images
        ├── components          # All components
        ├── index.js            # Main js file of the application
    ├── index.html              # Main html file of the application
    ├── package.json            # NPM configuration file
    └── README.md               # This file

## Deploying to prod
After staging deploy, in semaphore CI just push the pipeline to prod
