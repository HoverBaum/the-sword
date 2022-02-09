import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stringToBoolean } from '../util'

const isMuted = stringToBoolean(import.meta.env.VITE_IS_MUTED)
const initialTextSpeed =
  (import.meta.env.VITE_TEXT_SPEED &&
    parseInt(import.meta.env.VITE_TEXT_SPEED, 10)) ||
  1

// Here you can configure basic settings.
const baseSettings: SettingsState = {
  textSpeed: initialTextSpeed,
  wordFadeInTime: 0.5,
  wordDelayTime: 0.1,
  headingFadeInTime: 1,
  initiallyDisplayedWords: 3,
  lineFadingTime: 30,
  isMuted,
}

export type SettingsState = {
  textSpeed: number
  initiallyDisplayedWords: number
  wordFadeInTime: number
  wordDelayTime: number
  headingFadeInTime: number
  lineFadingTime: number
  isMuted: boolean
}

const speedRelatedSettings = (speed: number): Partial<SettingsState> => ({
  textSpeed: speed,
  wordFadeInTime: baseSettings.wordFadeInTime / speed,
  wordDelayTime: baseSettings.wordDelayTime / speed,
  headingFadeInTime: baseSettings.headingFadeInTime / speed,
})

const initialState = {
  ...baseSettings,
  ...speedRelatedSettings(baseSettings.textSpeed),
}

export const settingSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setTextSpeed: (state, action: PayloadAction<number>) => {
      return { ...state, ...speedRelatedSettings(action.payload) }
    },
    setIsMuted: (state, action: PayloadAction<boolean>) => {
      state.isMuted = action.payload
    },
  },
})

// Actions to be used by the application.
export const { setTextSpeed, setIsMuted } = settingSlice.actions

export default settingSlice.reducer
