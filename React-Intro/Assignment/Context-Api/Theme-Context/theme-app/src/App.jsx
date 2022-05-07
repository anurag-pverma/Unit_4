import "./App.css";
import { useContext } from "react";
import { Navbar } from "./component/Navbar";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./component/Themes";
import { ThemeContext } from "./context/ThemeContext";
const StyledApp = styled.div``;
function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Navbar />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
