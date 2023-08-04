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
    --color-preto1: #0b0b0b;
    --color-preto2: #0D0D0D;
    --color-preto3: #131313;
    --color-preto4: #2a2a2a;
    --color-preto5: #181818;
    --color-verde-exclusivo: #00cb62;
    --color-vermelho-exclusivo: #d64950;
    --color-verde-escuro2: #02735E;
    --color-verde-claro1: #038C73;
    --color-verde-claro2: #36BFB1;
    --color-branco1: #ccc;
    --color-branco2: #d4d4d4;
    --color-cinza1: #b1b1b1;
    --color-cinza2: #6e6d6d;
    --color-cinza3: #c7c4c4a3;

  }
`

export default GlobalStyle
