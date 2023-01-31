# Catwiki

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
  - [ ] Breed Page
    - [x] Info - fetch breed data
    - [x] Gallery - fetch breed images
  - [ ] 404 Page
  - [ ] Loader
  - [x] Header
  - [x] Footer
  - [ ] Responsiveness
    - [x] base
    - [ ] xsmall
    - [ ] medium
    - [ ] large
    - [ ] xlarge
  - [ ] Deployment
    - [ ] Container
    - [ ] Compose
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
  - [x] Cors
  - [x] Logging
  - [x] Environment variables
  - [ ] Caching
  - [ ] Deployment
    - [ ] Container
    - [ ] Compose
    - [ ] Reverse Proxy
    - [ ] SSL

## Potential issues

- Secrets stored in .env could be accessed in the image.
  Ideally it should be stored in a secrets manager (Secrets Manager, Parameter Store etc)
