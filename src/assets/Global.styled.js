import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }
    body {
        font-family: "Lucida Grande",Verdana,Arial,Helvetica,sans-serif;
    }

    p {
        font-size: 1.6rem;
    }

    h1 {
        font-size: 8rem;

    }
`;

export default GlobalStyles;
