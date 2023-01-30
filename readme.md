# Catwiki

## TODO

- [ ] Client

  - [x] Repo setup
  - [x] Linters
  - [x] Formatter
  - [ ] Home Page
    - [ ] Banner
    - [ ] Search - fetch breeds data (use query api or might need to prefetch)
    - [ ] Discover - fetch breeds data with images
    - [ ] Promotion
  - [ ] Breed Page
    - [ ] Info - fetch breed data
    - [ ] Gallery - fetch breed images
  - [ ] 404 Page
  - [ ] Loader
  - [ ] Header
  - [ ] Footer
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
