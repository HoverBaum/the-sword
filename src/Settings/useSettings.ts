import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { setIsMuted, setTextSpeed } from './settings.slice'

export const useSettings = () => {
  const settings = useSelector((state: RootState) => state.settings)
  const dispatch = useDispatch()

  const setSpeed = (speed: number) => {
    dispatch(setTextSpeed(speed))
  }

  const toggleMute = () => {
    dispatch(setIsMuted(!settings.isMuted))
  }

  return {
    ...settings,
    setSpeed,
    toggleMute,
  }
}
