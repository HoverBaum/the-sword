import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const baseSettings: SettingsState = {
  textSpeed: import.meta.env.VITE_TEXT_SPEED || 1,
  wordFadeInTime: 0.5,
  wordDelayTime: 0.1,
  headingFadeInTime: 1,
  initiallyDisplayedWords: 3,
  lineFadingTime: 30,
}

export type SettingsState = {
  textSpeed: number
  initiallyDisplayedWords: number
  wordFadeInTime: number
  wordDelayTime: number
  headingFadeInTime: number
  lineFadingTime: number
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
  },
})

// Actions to be used by the application.
export const { setTextSpeed } = settingSlice.actions

export default settingSlice.reducer