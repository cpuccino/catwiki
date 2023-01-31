# Catwiki

## Requirements

- NVM (Node Version Manager)
- Docker

## Development

- Run `nvm use` to ensure proper node version is used
- Configure .env for client

```
@client/.env

NEXT_PUBLIC_API_URL=http://localhost:serverport
```

- Configure .env for server

```
@server/.env

CATWIKI_API_KEY=api_key
```

- Run `yarn dev` on both client and server

## Deployment

- Configure .env on both client and server
- Run `docker compose up -d`

## TODO

- [ ] Client

  - [x] Repo setup
  - [x] Linters
  - [x] Formatter
  - [x] Base styles
    - [x] Reset
    - [x] Typography
    - [x] Colors
    - [x] Utilities
  - [x] Home Page
    - [x] Banner
    - [x] Search - fetch breeds data (use query api or might need to prefetch)
    - [x] Discover - fetch breeds data with images
    - [x] Promotion
  - [x] Breed Page
    - [x] Info - fetch breed data
    - [x] Gallery - fetch breed images
  - [ ] 404 Page
  - [ ] Loader
  - [x] Header
  - [x] Footer
  - [x] Responsiveness
    - [x] base (mobile)
    - [x] xsmall (mobile)
    - [x] medium (tablet)
    - [x] large (desktop)
    - [x] xlarge (desktop)
  - [x] Replace mocks with real api calls
  - [ ] Deployment
    - [x] Container
    - [x] Compose
    - [ ] Reverse Proxy
    - [ ] SSL
  - [ ] Optimization
    - [ ] SSR

- [ ] Server
  - [x] Repo setup
  - [x] Linters
  - [x] Formatter
  - [x] Controllers
    - [x] Catwiki controller
      - [x] GET/ breeds/:breed
      - [x] GET/ breeds
      - [x] GET/ images
  - [x] Services
    - [x] Catwiki service
      - [x] Fetch & transform breed data
      - [x] Fetch & transform image data
  - [x] Routing
    - [x] Catwiki
  - [x] Tests (BDD)
  - [x] Cors
  - [x] Logging
  - [x] Environment variables
  - [ ] Caching
  - [ ] Deployment
    - [x] Container
    - [x] Compose
    - [ ] Reverse Proxy
    - [ ] SSL

## Potential issues

- Secrets stored in .env could be accessed in the image.
  Ideally it should be stored in a secrets manager service (Secrets Manager, Parameter Store etc)
