import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html {
        font-size: 16px;
        width: 100%;
        height: 100%;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyles;

// custom font
// paragraphs
// image
