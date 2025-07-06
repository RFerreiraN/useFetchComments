import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CommentsComponent } from './Components/CommentsComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CommentsComponent/>
  </StrictMode>,
)
