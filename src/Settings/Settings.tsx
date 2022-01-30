import { Page, Slider, Text } from '@geist-ui/core'
import { ComponentType } from 'react'

export const Settings: ComponentType = () => {
  return (
    <Page>
      <Text h1>Settings</Text>
      <Slider initialValue={1} max={20} min={1} />
    </Page>
  )
}
