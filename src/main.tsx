import React from 'react'
import ReactDOM from 'react-dom'

// Improve font rendering on Windows.
import 'inter-ui/inter.css'
import App from './App'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'
import { CssBaseline, GeistProvider, Themes } from '@geist-ui/core'

const storytellerTheme = Themes.createFromDark({
  type: 'storyteller',
})

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <GeistProvider themes={[storytellerTheme]} themeType="storyteller">
        <CssBaseline />
        <App />
      </GeistProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
