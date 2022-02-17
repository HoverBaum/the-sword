import 'types-wm'
import { useEffect, useState } from 'react'

type WebMonetizationStatus =
  | 'pending'
  | 'stopped'
  | 'started'
  | 'unsupported'
  | 'loading'
  | 'deactivated' // So we can turn the feature off for desktop bundles.

export const useWebMonetization = () => {
  const [state, setState] = useState<WebMonetizationStatus>('loading')

  const onChange = () => {
    if (!document.monetization)
      return console.error(
        'Trying to update Web monetization state without monetization!'
      )
    setState(document.monetization.state)
  }

  useEffect(() => {
    if (!document.monetization) return setState('unsupported')
    setState(document.monetization.state)
    document.monetization.addEventListener('monetizationpending', onChange)
    document.monetization.addEventListener('monetizationstart', onChange)
    document.monetization.addEventListener('monetizationstop', onChange)
  })

  return state
}
