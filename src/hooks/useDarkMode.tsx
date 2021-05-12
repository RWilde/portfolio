import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../theme";

export default () => {
  const [theme, setTheme] = useState(lightTheme);

  const isDarkTheme = (theme: any) => {
    return theme === darkTheme;
  };

  const toggleTheme = () => {
    localStorage.setItem("isDarkTheme", isDarkTheme(theme) ? "false" : "true");
    setTheme(isDarkTheme(theme) ? lightTheme : darkTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("isDarkTheme") === "true";
    setTheme(localTheme ? darkTheme : lightTheme);
  }, []);

  return {
    theme,
    toggleTheme,
    isDarkTheme,
  };
};
