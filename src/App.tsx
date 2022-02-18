/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react'
import { Tag } from '@geist-ui/core'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { AboutPage } from './About/AboutPage'
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

      {/* We use Hashrouter to run on Itch. */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/story" element={<Story />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </HashRouter>

      {/* While developing we want to let users know this game is not finished. */}
      <Tag
        css={css`
          position: fixed;
          left: 1rem;
          bottom: 1rem;
          opacity: 0.8;
        `}
        type="warning"
      >
        ALPHA:2
      </Tag>
    </div>
  )
}

export default App
