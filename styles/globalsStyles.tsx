import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', Sans-Serif;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --color-menu: #190526f6 ;
  }
`

export default GlobalStyle
