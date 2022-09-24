import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './routes';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/ThemeComponent';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <Routing />
    </Theme>
  </React.StrictMode>
);
