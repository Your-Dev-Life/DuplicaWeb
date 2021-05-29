# Duplica Web

## Table of contents

- [Dependencies](#dependencies)
- [Install](#install)
- [Run](#run)
- [Build](#build)
- [Tests](#tests)
- [Deploy](#deploy)

#### Follow the next steps to Install, Run, Build, Test and Deploy the App.

## Dependencies

- Node
- Serverless Framework

---

## Install

```
npm install
```

## Run

```
npm start
```

## Build

```
npm run build
```

## Tests

### Run unit and integration tests

```
npm test
```

### Run unit and integration tests and keep watching

```
npm run test:auto
```

### Run all tests

```
npm run test:all
```

### Run coverage tests

```
npm run test:coverage
```

### Run Lint

```
npm run lint
```

## Deploy

The local deployment requires you create a `.env` file in the root folder and add the following `key:values`:

```
AWS_ACCESS_KEY_ID=<Key on AWS>
AWS_SECRET_ACCESS_KEY=<Secret on AWS>
ENV=<Environment of the server>
DUPLICA_API_URL=<Duplica Api base URL || http://localhost:3000/dev>
LOGOUT_REDIRECT=<URL to be redirected after logout>
```

Deploy the application on AWS through Serverless Framework to test in the sandbox:

```
serverless deploy --stage dev --account XXXXX --certificateId XXXXX --verbose
```

## Application URLs

- [Local](http://localhost:1234)
- [Dev - Development](https://dev.duplica.yourdevlife.com)
- [Stg - Staging](https://stg.duplica.yourdevlife.com)
- [Prod - Production](https://duplica.yourdevlife.com)
