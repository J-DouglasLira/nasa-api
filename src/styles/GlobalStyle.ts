import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body{
    height: 100%;
    background-image: linear-gradient(to top, #335fee, #4b5fe8, #5b5fe2, #685fdd, #725fd7);
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default GlobalStyle;
