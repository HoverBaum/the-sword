# The InkSword

A technical demonstration of creating a [Wanderlust](https://differenttales.com/wanderlust/) inspired game using [Ink](https://www.inklestudios.com/ink/) as the narative engine, powering a [React](https://reactjs.org/) application. The [ink web-player](https://github.com/y-lohse/inkjs) keeps the stories state which we mirror into a Redux store to organize displaying of content.

We use [geist-ui](https://geist-ui.dev/) as a component library. The Redux store is setup using [Redux Toolkit](https://redux-toolkit.js.org/).

## Scenes

Within the ink file we use a `SCENE` tag that can specify a scene. Scenes can change the background, update the music and set styles. They are stored in a configuration file at `src/scenes.ts`.

## INK special token

### Tags

These tags are supported within the ink file. Use them as `TAG: value fo tag`.

- **SCENE** Identifying a scene to be used.
- **CHAPTER** Name of chapter. Will use name as heading and clear all text.
- **CLEAR** Clears all text.

### Continue choices

Any choice that is a simple "continue" will be rendered not as text but a "continue button" (Chevron down inside a button).

## Commands

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
- ~~Settings screen~~
- ~~Protagonists mood~~
- ~~Fade storyLines after a while~~
- ~~Asset credit screen~~
- ~~Opening screen for game~~
- ~~Auto scroll to bottom~~
- ~~Render "continue"-choice special~~
- Finish example story


## Might do

- Save and load (index DB?)
- Arrow key navigation
- Gamepad navigation
- Choices in Image
- Do Tunnels work?
- More Scene types than just images
- Crossfade audio

## Achievement ideas

- Pennyless
- Defeat the bandits
- Have a boring trip
- Buy Lisa a house
- Die
- Saw the mountains
- Saw the forrest