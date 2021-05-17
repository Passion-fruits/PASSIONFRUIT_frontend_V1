import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        background-color:black;
    }
    *{
        -ms-user-select: none; -moz-user-select: -moz-none; -webkit-user-select: none; -khtml-user-select: none; user-select:none;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        color:white;
    }
    a{
        text-decoration:none;
    }
    button{
        outline:none;
        cursor:pointer;
    }
    input{
        outline:none;
    }
    ul{
        list-style:none;
    }
`;

export default GlobalStyle;
