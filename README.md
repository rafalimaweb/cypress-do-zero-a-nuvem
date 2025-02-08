# Cypress from Zero to Cloud☁️

This project is a complete guide to learning and implementing automated testing with Cypress, from initial setup to running tests in the cloud.

## Introduction

Cypress is an end-to-end testing tool for web applications. This project aims to provide a step-by-step guide to setting up and using Cypress in your projects.

## Pre-requirements

it is required to have git, Node.js and npm installed to clone and run this project

```
I've used versions 2.42.1, v20.13.1 and 10.8.1 of git, Node.js and npm, respectively. I suggest you use the same or lataer LTS versions.
```

## Installation

To install Cypress, follow the steps below:

```bash
npm install cypress --save-dev
```

## Configuration

After installation, you can configure Cypress by adding a `cypress.json` file to the root of your project:

```json
{
  "baseUrl": "http://localhost:3000"
}
```

## Writing Tests

Tests are written to files within the folder `cypress/e2e`. Here is a simple test example:

```javascript
describe("My First Test", () => {
  it("Visit the home page", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome");
  });
});
```

## Run Tests

To run the tests, use the following command:

### Desktop

```
npm cy:open
npm test
```

### Mobile

```
npm cy:open:mobile
npm test:mobile
```

## Support this project

If you want to supoort this project, leave a ⭐
