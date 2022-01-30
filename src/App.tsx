/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Story } from './Story/Story'
import { Settings } from './Settings/Settings'

function App() {
  return (
    <div>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
          }
        `}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Story />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
