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
    --color-menu: #190526f6;
    --color-a: #0D0D0D;
    --color-ab: #0b0b0b;
    --color-abc: #131313;
    --color-a-plus: #181818;
    --color-b: #014034;
    --color-c: #02735E;
    --color-d: #038C73;
    --color-e: #36BFB1;
    --color-f: #ccc;
    --color-f-plus: #d4d4d4;

  }
`

export default GlobalStyle
