import React, { useState } from "react";
import {
  NavBar,
  About,
  Experience,
  Projects,
  Contact,
  Footer,
} from "./components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import useDarkMode from "./hooks/useDarkMode";
import { RiSunFoggyFill, RiSunLine } from "react-icons/ri";
import { AppContainer, Main, ToggleContainer, ToggleFab } from "./styles";
import { CSSTransition } from "react-transition-group";

function App() {
  const { theme, toggleTheme, isDarkTheme } = useDarkMode();
  const [isDisplayContactMe, setDisplayContactMe] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Main blurBackground={isDisplayContactMe}>
          <NavBar
            setDisplayContactMe={() => setDisplayContactMe(!isDisplayContactMe)}
          />
          <About></About>
          {/* <Experience></Experience> */}
          <Projects></Projects>
          <Footer></Footer>
        </Main>
        <CSSTransition
          in={isDisplayContactMe}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <Contact
            setDisplayContactMe={() => setDisplayContactMe(!isDisplayContactMe)}
          />
        </CSSTransition>
        <ToggleContainer>
          <ToggleFab clicked={isDarkTheme(theme)} onClick={toggleTheme}>
            {isDarkTheme(theme) ? <RiSunLine /> : <RiSunFoggyFill />}
          </ToggleFab>
        </ToggleContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
