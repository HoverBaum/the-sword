import React from "react"
import ReactDOM from "react-dom"
import "inter-ui/inter.css"
import App from "./App"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "./store"
import {
  CssBaseline,
  GeistProvider,
  GeistUIThemes,
  Themes,
} from "@geist-ui/core"

const myTheme: GeistUIThemes = Themes.createFromLight({
  type: "Custom",
  palette: {
    accents_1: "#111",
    accents_2: "#333",
    accents_3: "#444",
    accents_4: "#666",
    accents_5: "red",
    accents_6: "#999",
    accents_7: "#eaeaea",
    accents_8: "#fafafa",
    background: "blue",
    foreground: "green",
    selection: "#f81ce5",
    secondary: "#888",
    code: "#79ffe1",
    border: "#333",
    link: "#3291ff",
  },
  expressiveness: {
    dropdownBoxShadow: "0 0 0 1px #333",
    shadowSmall: "0 0 0 1px #333",
    shadowMedium: "0 0 0 1px #333",
    shadowLarge: "0 0 0 1px #333",
    portalOpacity: 0.75,
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <GeistProvider themes={[myTheme]} themeType="Custom">
        <CssBaseline />
        <App />
      </GeistProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
