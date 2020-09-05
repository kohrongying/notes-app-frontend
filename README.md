# Sapper-Jest-Typescript Template

Cloned from [sapper template](https://github.com/sveltejs/sapper-template) + other fun stuff

### Features
- [x] Typescript
- [x] Jest with coverage
- [x] Cypress (comes with sapper template)
- [x] Github Action to test and validate ts and build to `docs` branch

The main reason was that I wanted a fast test set up as I considered cypress as a end to end sort of integration testing. You may refer to `src/components/Nav.test.ts` for a sample test written to test individual svelte components.

Deployed to [Github Pages](https://kohrongying.github.io/sapper-jest-typescript-template/)

**Note:**
- Require a relative baseUrl in order to be deployed onto Github pages
- `src/server.js`: add base url to polka
- `package.json/scripts`: add `--basepath <baseURL>` to export
- `.github/workflows/build.yml`: For deploy action, update deploy folder to `__sapper__/export/<baseURL>`

### List of commands

```bash
# Install dependencies
npm install

# Run
npm run dev

# Test
npm t 
npm run test

# Watch tests
npm run test:watch

# Integration test with cypress
npm run test:integration

# Validate typescript
npm run validate

# Build files
npm run build
```
