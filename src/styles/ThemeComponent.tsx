import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { theme } from './theme';

const Theme: FC<{ children: ReactNode }> = ({ children }): JSX.Element => (
  <ThemeProvider theme={theme}>
    <>
      {children}
      <GlobalStyle />
    </>
  </ThemeProvider>
);

export default Theme;
