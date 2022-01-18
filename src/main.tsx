import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { StoryProvider } from './story.provider'

ReactDOM.render(
  <React.StrictMode>
    <StoryProvider>
      <App />
    </StoryProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
