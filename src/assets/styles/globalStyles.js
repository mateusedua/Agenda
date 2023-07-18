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


    @media screen ${({ theme }) => theme.size_tablet} {
        html {
            font-size: 60%;
        }
    }
    @media screen ${({ theme }) => theme.size_mobile} {
        html {
            font-size: 50%;
        }
    }
    
    body {
        background: ${({ theme }) => theme.backgroudColor};
    }

    button {
        cursor: pointer;
    }
`