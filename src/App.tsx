/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreditsPage } from './Credits/CreditsPage'
import { Home } from './Home'
import { Story } from './Story/Story'

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
          <Route path="/" element={<Home />}></Route>
          <Route path="/story" element={<Story />}></Route>
          <Route path="/credits" element={<CreditsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
