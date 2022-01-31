import { useSelector } from 'react-redux'
import { RootState } from '../store'

export const useSettings = () => {
  return useSelector((state: RootState) => state.settings)
}
