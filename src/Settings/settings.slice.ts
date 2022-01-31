import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const baseSettings: SettingsState = {
  textSpeed: import.meta.env.VITE_TEXT_SPEED || 1,
  wordFadeInTime: 0.5,
  wordDelayTime: 0.1,
  headingFadeInTime: 1,
  initiallyDisplayedWords: 3,
}

export type SettingsState = {
  textSpeed: number
  initiallyDisplayedWords: number
  wordFadeInTime: number
  wordDelayTime: number
  headingFadeInTime: number
}

const calculateSettings = (
  settings: SettingsState,
  speed: number
): SettingsState => ({
  ...settings,
  textSpeed: speed,
  wordFadeInTime: settings.wordFadeInTime / speed,
  wordDelayTime: settings.wordDelayTime / speed,
  headingFadeInTime: settings.headingFadeInTime / speed,
})

const initialState = calculateSettings(baseSettings, baseSettings.textSpeed)

export const settingSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setTextSpeed: (state, action: PayloadAction<number>) => {},
  },
})

// Actions to be used by the application.
export const {} = settingSlice.actions

export default settingSlice.reducer
