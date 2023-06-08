import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}

html,body{
    height: 100%;
}

#root{
    height: 100%;
    background-color: #21212D;
}

button{
    cursor: pointer;
}

`;

export default GlobalStyle;