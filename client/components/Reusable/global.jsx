import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    
    html, body {
        #app {
            display: flex;
            @media screen and (max-width: 800px) {
                flex-direction: column;
            }
        }
    }
    `
    
    export default GlobalStyle