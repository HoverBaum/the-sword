# The InkSword

A technical demonstration of creating a [Wanderlust](https://differenttales.com/wanderlust/) inspired game using [Ink](https://www.inklestudios.com/ink/) as the narative engine, powering a [React](https://reactjs.org/) application. The [ink web-player](https://github.com/y-lohse/inkjs) keeps the stories state which we mirror into a Redux store to organize displaying of content.

We use [geist-ui](https://geist-ui.dev/) as a component library. The Redux store is setup using [Redux Toolkit](https://redux-toolkit.js.org/).

## Scenes

Within the ink file we use a `SCENE` tag that can specify a scene. Scenes can change the background, update the music and set styles. They are stored in a configuration file at `src/scenes.ts`.

### Commands

Run game locally.

```
npm run dev
```

Compile ink file to TypeScript. This also watches the ink file for changes and re-compiles on change. (current win and mac supported)

```
npm run ink:compile
```
