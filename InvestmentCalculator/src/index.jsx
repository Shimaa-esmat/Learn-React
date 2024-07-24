import reactDom from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'

reactDom.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)
