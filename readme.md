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

Compile ink file to TypeScript. (current win and mac supported)

```
npm run ink:compile
```

## Trivia

- Focussing a button scrolls the content to that button. Thus we do not need to implement scrolling logic. We simply focus the first choice button.

## Todos

- ~~Stories state in Redux~~
- ~~Compile ink to TS~~
- ~~Backgorund images~~
- ~~Clear paragraphs~~
- ~~Handle tags~~
- ~~Themable UI~~
- ~~Scenes~~
- ~~Support for background music~~
- ~~Display image credit~~
- ~~Chapter title~~
- ~~Nicer reading flow with text appearing~~
- Choices in Image
- Do Tunnels work?
- Mood or something of protagonist??
- Finish example story
