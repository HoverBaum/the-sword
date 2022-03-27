/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react'
import { Tag } from '@geist-ui/core'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { AboutPage } from './About/AboutPage'
import { Home } from './Home'
import { Story } from './Story/Story'
import packageData from '../package.json'

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

          @keyframes shakeY {
            from,
            to {
              transform: translate3d(0, 0, 0);
            }

            20% {
              transform: translate3d(0, -5px, 0);
            }
            60% {
              transform: translate3d(0, -2px, 0);
            }

            40% {
              transform: translate3d(0, 4px, 0);
            }

            80% {
              transform: translate3d(0, 1px, 0);
            }
          }
          .shakeY {
            animation: 0.3s;
            animation-name: shakeY;
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
        {packageData.version}
      </Tag>
    </div>
  )
}

export default App
