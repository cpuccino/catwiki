# Catwiki

Cat wiki app built with Typescript, Node and React

Preview: https://catwiki.cpuccino.com/

**Screenshots below**

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
  - [x] Loader
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

## Screenshots

<div style="display: flex">
  <img width="263" alt="home-screen-mobile" src="https://user-images.githubusercontent.com/66815398/215881453-b04dcdfe-6c26-48ad-a724-8b6c74b18c83.png">
  <img width="301" alt="breed-screen-mobile" src="https://user-images.githubusercontent.com/66815398/215881501-1d3abed3-a805-492d-a2a7-83d55b7b3421.png">
</div>

<img width="500" alt="home-screen-banner-desktop" src="https://user-images.githubusercontent.com/66815398/215881823-4292a484-2b38-4bb4-8249-10521e13d6a9.png">
<img width="500" alt="home-screen-search-desktop" src="https://user-images.githubusercontent.com/66815398/215881838-3d6523fe-2d2f-4435-a33f-da4dfdec1bd8.png">
<img width="500" alt="home-screen-discovery-desktop" src="https://user-images.githubusercontent.com/66815398/215881879-58827199-6d1e-44ae-8478-9472f063d75f.png">
<img width="500" alt="breed-screen-desktop" src="https://user-images.githubusercontent.com/66815398/215881870-ef9de1dc-3ae7-46a2-b60d-2be4f66dee2b.png">
