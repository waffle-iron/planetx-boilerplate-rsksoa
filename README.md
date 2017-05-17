planetx-boilerplate-rsksoa
======

PlanetX flavor of [react-starter-kit](https://github.com/kriasoft/react-starter-kit)
------

CURRENT: n/a ~~
NEXT: v0.1.0, 2017/05/22 ~~
Created 2017/05/22

---

<!-- TOC depthFrom:2 depthTo:3 orderedList:false updateOnSave:true withLinks:true -->

- [Documentation](#documentation)
- [Requirements](#requirements)
- [File Structure](#file-structure)
- [Development](#development)
  - [Dev Server](#dev-server)
  - [Development Process](#development-process)
- [Test & Prod Server](#test--prod-server)
  - [Prod Server (in dev environment)](#prod-server-in-dev-environment)
  - [Test Build](#test-build)
  - [Production Build](#production-build)
- [Linting](#linting)
- [Typing](#typing)
- [Testing](#testing)

<!-- /TOC -->

## Documentation

Check out the [wiki](https://github.com/Falieson/planetx-boilerplate-rsksoa/wiki)!<br />
- [Features](https://github.com/Falieson/planetx-boilerplate-rsksoa/wiki/Features)


## Requirements

  * Mac OS X, Windows, or Linux
  * [Node.js](https://nodejs.org/) v6.5 or newer
  * `npm` v3.10 or newer (new to [npm](https://docs.npmjs.com/)?)
  * `node-gyp` prerequisites mentioned [here](https://github.com/nodejs/node-gyp)
  * Text editor or IDE pre-configured with React/JSX/Flow/ESlint ([learn more](./how-to-configure-text-editors.md))


## File Structure

Before you start, take a moment to see how the project structure looks like:

```
.
├── /build/                     # The folder for compiled output
├── /docs/                      # Documentation files for the project
│   ├── /RSK/                   # React-Starter-Kit documentation
├── /licenses/                  # Licenses
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /components/            # React components
│   ├── /content/               # Static pages like About Us, Privacy Policy etc.
│   ├── /core/                  # Core framework and utility functions
│   ├── /data/                  # GraphQL server schema and data models
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /routes/                # Page/screen components along with the routing information
│   ├── /client.js              # Client-side startup script
│   ├── /config.js              # Global application settings
│   └── /server.js              # Server-side startup script
├── /test/                      # Unit and end-to-end tests
├── /tools/                     # Build automation scripts and utilities
│   ├── /lib/                   # Library for utility snippets
│   ├── /build.js               # Builds the project from source to output (build) folder
│   ├── /bundle.js              # Bundles the web resources into package(s) through Webpack
│   ├── /clean.js               # Cleans up the output (build) folder
│   ├── /copy.js                # Copies static files to output (build) folder
│   ├── /deploy.js              # Deploys your web application
│   ├── /run.js                 # Helper function for running build automation tasks
│   ├── /runServer.js           # Launches (or restarts) Node.js server
│   ├── /start.js               # Launches the development web server with "live reload"
│   └── /webpack.config.js      # Configurations for client-side and server-side bundles
└── package.json                # The list of 3rd party libraries and utilities
```

## Development

*Tip:* anytime you type `npm` or `npm run` you could use `yarn` instead <br />

### Dev Server
This command will build the app from the source files (`/src`) into the output
`/build` folder. As soon as the initial build completes, it will start the
Node.js server (`node build/server.js`) and [Browsersync](https://browsersync.io/)
with [HMR](https://webpack.github.io/docs/hot-module-replacement) on top of it.

```
$ npm install
$ npm run relay
$ npm run start
```

> [http://localhost:3000/](http://localhost:3000/) — Node.js server (`build/server.js`)<br>
> [http://localhost:3000/graphql](http://localhost:3000/graphql) — GraphQL server and IDE<br>
> [http://localhost:3001/](http://localhost:3001/) — BrowserSync proxy with HMR, React Hot Transform<br>
> [http://localhost:3002/](http://localhost:3002/) — BrowserSync control panel (UI)

Now you can open your web app in a browser, on mobile devices and start hacking. Whenever you modify any of the source files inside the `/src` folder, the module bundler ([Webpack](http://webpack.github.io/)) will recompile the app on the fly and refresh all the connected browsers.

### Development Process


## Test & Prod Server
### Prod Server (in dev environment)

Note that the `npm start` command launches the app in `development` mode, the compiled output files are not optimized and minimized in this case.
You can use `--release` command line argument to check how your app works in release (production) mode:

```shell
$ npm start -- --release
```

### Test Build

If you need just to build the app (without running a dev server), simply run:

```shell
$ npm run build
```

### Production Build

After running this command, the `/build` folder will contain the compiled
version of the app. For example, you can launch Node.js server normally by
running `node build/server.js`.

```shell
$ npm run build -- --release
```


## Linting

The following scripts are available:
- `npm run lint:staged`
- `npm run lint`
- `npm run lint:js`
- `npm run lint:css`
<!--
- `npm run lint:fix`   (or `npm run l`)
- `npm run lint:watch` (or `npm run lw`)
-->

<!--
##  Typing
- `npm run lint:fix`   (or `npm run l`)
- `npm run lint:watch` (or `npm run lw`)
- `npm run flow`       (or `npm run f`)
- `npm run flow:watch` (or `npm run fw`)

-->
## Testing

The following scripts are available:
- `npm run test`
- `npm run test:watch`
- `npm run test:cover`
- `npm run coverage`
