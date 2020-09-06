# Notes-App-Frontend

### Features
- Sapper x Typescript x Jest


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

## Run parse backend in Docker
```bash
./start-parse-server.sh
./shutdown-parse-server.sh
```

## Schema Design

Collections 
- name
- userId (belongs to User)

Doc 
- name
- collectionId (belongs to Collection)
- content (can be in markdown)

Link
- url
- docId
