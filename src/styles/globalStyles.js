import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: -apple-system, Poppins, SF Pro Display, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html{
    --body-background-color:#F4F7F6;
    --stripe-color:#F0F0F0;
    --text-color:#1C1F24;
    --light-gray-color:#F2F2F2;
    --mid-gray-color:#A1A3A5;
    --dark-gray-color:#231f20;
  }
  body{
    /* background-color: var(--body-background-color); */
  }
  button{
    border:none;
    cursor: pointer;
    outline:none;
    font-family:inherit;
    font-size:14px;
    color:black;
    background-color:transparent;
    display:block;
  }
  input{
    outline:none;
    font-family:inherit;
    font-size:inherit;
    color:black;
    display:block;
    border:none;
    appearance: none; /* iOS */
    border-radius: 0; /* iOS */
  }
  ul, ol{
    list-style:none;
  }
  a{
    text-decoration:none;
    color:#000;
  }


`;

export default GlobalStyle;
