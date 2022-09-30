import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    
  }
  ::-webkit-scrollbar-track{
    background-color: transparent;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-corner{
    background-color: transparent;
    width: 0px;
    height: 0px;
    display: none;
  }

  ::-webkit-scrollbar{
    width: 3px;
    height: 5px;
    background-color: transparent;
  }


`;

export default GlobalStyle;
