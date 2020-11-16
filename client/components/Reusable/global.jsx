import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    

    }
    html, body {
       
        @media screen and (max-width: 850px) {
            &::before {
                height: 42%;
        }

    }
    `
    
    export default GlobalStyle