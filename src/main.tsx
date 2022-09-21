import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import './index.css'
import AuthorizedRoutes from './routes'
import { theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <AuthorizedRoutes />
    </ThemeProvider>
  </React.StrictMode>
)
