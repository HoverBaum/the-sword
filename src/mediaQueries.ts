import { useMediaQuery } from '@geist-ui/core'
import { useMemo } from 'react'

export const useIsMobile = () => {
  // We need one "useMediaQuery" for all the widths we want to count as mobile.
  const isSM = useMediaQuery('sm')
  const isXS = useMediaQuery('xs')

  const isMobile = useMemo(() => isXS || isSM, [isXS, isSM])

  return isMobile
}

export const useIsMediumDown = () => {
  const isSM = useMediaQuery('sm')
  const isXS = useMediaQuery('xs')
  const isMD = useMediaQuery('md')

  const isMediumDown = useMemo(() => isXS || isSM || isMD, [isXS, isSM, isMD])

  return isMediumDown
}
