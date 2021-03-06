import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }

    body::-webkit-scrollbar {
        width: 7px;
        background-color: #F5F5F5;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #000000;
    }

`;
