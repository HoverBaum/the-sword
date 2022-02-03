import { GeistProvider, Themes } from '@geist-ui/core'
import { ComponentType, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const initialStoryTheme = Themes.createFromDark({
  type: 'story',
})

/**
 * Provide the geistUI theme for the story based on story state.
 */
export const StoryThemeProvider: ComponentType = ({ children }) => {
  const { scene } = useSelector((state: RootState) => state.story)
  const [storyTheme, setStoryTheme] = useState(initialStoryTheme)

  useEffect(() => {
    if (!scene) return
    const theme = Themes.createFromDark({
      type: initialStoryTheme.type,
      palette: {
        background: scene.backgroundColor,
        foreground: scene.textColor,
      },
    })
    setStoryTheme(theme)
  }, [scene])

  return (
    <GeistProvider themes={[storyTheme]} themeType="story">
      {children}
    </GeistProvider>
  )
}
