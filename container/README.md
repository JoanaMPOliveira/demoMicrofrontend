# Read Me

Entry point and container application for a micro frontends demo.

This is a React application, which renders a navigation bar, and uses React Router to select a
microfrontend to render onto the page.

# Getting started

1. Clone the repo
2. `yarn install`
3. `yarn start`

You can run the container on its own, but for it to actually do anything you'll
also need to be running:

- the [`content`](https://github.com/JoanaMPOliveira/demoMicrofrontend/tree/master/content) server
- the [`browse`](https://github.com/JoanaMPOliveira/demoMicrofrontend/tree/master/browse) micro frontend
- the [`book-order`](https://github.com/JoanaMPOliveira/demoMicrofrontend/tree/master/book-order) micro frontend

# Run the tests

- `yarn test`
