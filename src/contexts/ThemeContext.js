import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [photoMode, setPhotoMode] = useState(false);
  const [colorMode, setColorMode] = useState(false);

  const value = {
    photoMode,
    setPhotoMode,
    colorMode,
    setColorMode,
  };

  return (
    <ThemeContext.Provider value={{ value }}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
