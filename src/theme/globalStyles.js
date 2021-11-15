import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        font-size: 14px;
        /* TODO: dynamic breakpoints*/
        @media(min-width: 480px) {
            font-size: 16px;
        };
    }

    body {
        background-color: ${({ theme }) => theme.background};
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: background-color 0.25s linear;
        height: 100vh;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`

export default GlobalStyles
