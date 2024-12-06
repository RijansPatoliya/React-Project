import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sidebar from './components/Sidebar.jsx'
import "./sidebar.css"
import Header from './components/Header.jsx'
import "./header.css"
import MainPage from './components/MainPage.jsx'
import "./mainpage.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className="grid">
   <Sidebar />
   <Header />
   <MainPage />
   </div>
  </StrictMode>,
)
