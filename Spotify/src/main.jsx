import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Global.css'
import MainBody from './components/MainBody.jsx'
import PlayControl from './components/PlayControl.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainBody />
    <PlayControl />
  </StrictMode>,
)
