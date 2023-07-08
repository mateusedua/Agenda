import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing:border-box;
        font-family: 'Roboto',sans-serif;
    }

    html {
        font-size: 60%;
    }

    @media screen and (max-width: 768px) {
        html {
            font-size: 50%;
        }
    }

    @media screen and (min-width: 769px) and (max-width: 1024px){
        html {
            font-size: 60%;
        }
    }

    body {
        background: ${({ theme }) => theme.backgroudColor};
    }

    button {
        cursor: pointer;
    }
`