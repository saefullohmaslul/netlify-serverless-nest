<p align="center">
  <a href="https://github.com/saefullohmaslul/netlify-serverless-nest" target="blank"><img src="https://www.pngplay.com/wp-content/uploads/2/Green-Leaves-PNG-Photos.png" width="200" alt="Go" /></a>
</p>

<h1 align="center">Serverless Netlify with Nestjs Framework</h1>

## Requirements

- [Netlify CLI](https://docs.netlify.com/cli/get-started/)
- [Nodejs](https://nodejs.org/en/)

## Feature

- Serverless free with Netlify
- Build using Nestjs framework
- Clean pattern

## Setup

### Building and running the dockerized codebase

1. Clone the repository.

1. Build app using `npm run build`.

1. Run app using `netlify dev`.

1. Open endpoint:
    ```
    /.netlify/functions/server/
    ```

### Endpoint

We already create example endpoint:

1. Generate random string `/.netlify/functions/server/randoms/string`

1. Generate random uuid `/.netlify/functions/server/randoms/uuid`

### Cleaning up

1. When you're done, `Ctrl-C` in the main `netlify dev` window to terminate the running processes.

1. Delete this directory to cleaning app
