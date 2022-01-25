import React from 'react'
import ReactDOM from 'react-dom'

// Improve font rendering on Windows.
import 'inter-ui/inter.css'
import App from './App'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'
import { ThemeProvider } from './ThemeProvider'

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
