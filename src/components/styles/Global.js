import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        
    }

    body{
        background-color: ${({theme}) => theme.bgColor};
    }
    html{
        font-size: 62.5%;
    }


`

export default GlobalStyle;