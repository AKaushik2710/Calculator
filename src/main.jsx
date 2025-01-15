import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Buttons from './Components/Buttons.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Buttons count={9}/>
  </StrictMode>,
)
