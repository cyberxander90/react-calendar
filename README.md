
# react-calendar

Calendar application built with [React](https://reactjs.org/).

## Core Technologies

- [React](https://reactjs.org/)
- [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.
- [Redux](https://redux.js.org/) and [Redux-Toolkit](https://redux-toolkit.js.org/) to manage the state.
- [Axios](https://github.com/axios/axios) as HTTP client.
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start) for routing.
- [moment](https://momentjs.com/) to manage dates.

## UI Plugins

- [React Day Picker](https://github.com/gpbl/react-day-picker)
- [React-Select](https://react-select.com/home)

# Install

To run the project install [Node.js v10.16](https://nodejs.org/en/)

If you have installed [nvm](https://github.com/nvm-sh/nvm) then execute

```bash
> nvm use
```

to automatically setup the version.

Then install dependencies

```bash
> npm i
```

# Run

## Production

To start the project for **production** execute

```bash
> npm run start
```

## Development

To start the project for **development** execute the client

```bash
> npm run start-client
```

and the server

```bash
> npm run start-server
```

# API

The **express app** is a toy API with a `file-json` database.
It exposes the endpoints

- `GET /api/v1/events`
  Fetch all events
- `GET /api/v1/events/:id`
  Fetch event
- `GET /api/v1/events/from/:startDate/to/:endDate`
  Fetch events in the specified range
- `POST /api/v1/events/`
  Create event
- `POST /api/v1/events/:id`
  Update event
- `DELETE /api/v1/events/id`
  Delete event
- `DELETE /api/v1/events/all`
  Delete all events. **Use carefully.**
- `DELETE /api/v1/events/:date`
  Delete all events in the same day

# Storybook

You can inspect the components with storybook visiting http://localhost:5000/storybook-static/index.html

# Edge cases

We add some **tricks** to facilitate test edge cases.

## Failed to save event

To test an scenario where the server fails saving events, you can try setting a **city** with `'Barcelona`.

## Delay response

To test an scenario where the server take long time to save events, you can try setting a **city** with `Roma`.

## Unexpected error

To test an scenario where the an unexpected error occur, you can try visiting `/month/error`.

## Clear all events

To clear all events you can use this curl
```bash
curl --location --request DELETE 'http://localhost:5000/api/v1/events/all'
```

# Available Scripts

## `npm run start`

Build the **react app** and run the **express server**.
Then navigate to http://localhost:5000/

## `npm run start-client`

Runs the **react app** in the development mode on [http://localhost:3000](http://localhost:3000).

## `npm run start-server`

Runs the **express app** on [http://localhost:5000/api/v1](http://localhost:5000/api/v1/events)

## `npm run test`

Launches the **test runner** in the interactive watch mode.

## `npm run test-unit`

Run unit tests.

## `npm run build`

Builds the **react app** for production to the `build` folder.

## `npm run analyze`

Analyze the size of scripts files for build.

## `npm run bundle-size`

Check the script and css files sizes for build.

## `npm run eslint`

Fix script files based on [eslint](https://eslint.org/) configs.

## `npm run stylelint`

Fix styles files based on [stylelint](https://stylelint.io/) configs.

## `npm run storybook`

To run [storybook](https://storybook.js.org/)

## `npm run cy:open`

To open [cypress](https://www.cypress.io/) in the interactive mode.

## `npm run cy:run`

To run [cypress](https://www.cypress.io/) tests.
