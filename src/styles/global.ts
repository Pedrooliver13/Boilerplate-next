import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }: any) => css`
    html {
      font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      background-color: ${theme.colors.mainBg};
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export default GlobalStyle
