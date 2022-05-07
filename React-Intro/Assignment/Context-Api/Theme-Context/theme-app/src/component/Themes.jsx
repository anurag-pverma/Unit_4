import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontcolor: "#000",
};
export const darkTheme = {
  body: "#000",
  fontcolor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${(props) => props.theme.body}
  }
`;
