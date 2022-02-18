import { SaveGameType } from './game.middleware'
import { useSettings } from './Settings/useSettings'

export const useSave = () => {
  const { savegameKey } = useSettings()
  const storageSave = localStorage.getItem(savegameKey)
  const hasSaveGame = !!storageSave
  const saveGame: SaveGameType | undefined = !!storageSave
    ? JSON.parse(storageSave)
    : undefined

  const removeSaveGame = () => {
    localStorage.removeItem(savegameKey)
  }

  return { hasSaveGame, saveGame, removeSaveGame }
}
