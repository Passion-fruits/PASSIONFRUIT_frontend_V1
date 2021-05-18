import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { INP_COLOR } from ".";

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
    input:-webkit-autofill { 
        box-shadow: 0 0 0 30px transparent inset ; 
        -webkit-text-fill-color: ${INP_COLOR}; 
        } 
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active { 
            transition: background-color 5000s ease-in-out 0s; 
        }
`;

export default GlobalStyle;
