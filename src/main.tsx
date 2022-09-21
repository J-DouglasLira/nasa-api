import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthorizedRoutes from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthorizedRoutes />
  </React.StrictMode>
)
