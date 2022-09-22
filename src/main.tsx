import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthorizedRoutes from './routes';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
   <AuthorizedRoutes />
  </React.StrictMode>
)
