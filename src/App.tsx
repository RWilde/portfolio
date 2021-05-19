import React, { useState } from "react";
import {
  NavBar,
  About,
  Experience,
  Projects,
  Contact,
  Footer,
  Wave,
} from "./components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import useDarkMode from "./hooks/useDarkMode";
import { RiSunFoggyFill, RiSunLine } from "react-icons/ri";
import {
  AppContainer,
  Main,
  Seperator,
  ToggleContainer,
  ToggleFab,
} from "./styles";
import { CSSTransition } from "react-transition-group";
import Emoji from "./components/helpers/Emoji";

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
          <About />
          <Seperator prevColor={theme.about} nextColor={theme.experience}>
            <Wave />
          </Seperator>
          <Experience />
          <Seperator prevColor={theme.experience} nextColor={theme.projects}>
            <Wave />
          </Seperator>
          <Projects />
          <Seperator prevColor={theme.projects} nextColor={theme.footer}>
            <Wave />
          </Seperator>
          <Footer />
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
