import { CssBaseline, GeistProvider, Themes } from "@geist-ui/core"
import { ComponentType, useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import { StoryState } from "./store"

const storytellerTheme = Themes.createFromDark({
  type: "storyteller",
})

const initialStoryTheme = Themes.createFromDark({
  type: "story",
})

export const ThemeProvider: ComponentType = ({ children }) => {
  const { scene } = useSelector((state: StoryState) => state.story)
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
    <GeistProvider themes={[storytellerTheme, storyTheme]} themeType="story">
      <CssBaseline />
      {children}
    </GeistProvider>
  )
}
