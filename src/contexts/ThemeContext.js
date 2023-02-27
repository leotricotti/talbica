import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [themeHandler, setThemeHandler] = useState(false);

  const handleThemeChange = (id) => {
    if (id === 2) {
      setThemeHandler(true);
    } else {
      setThemeHandler(false);
    }
  };

  console.log(themeHandler);
  const value = {
    themeHandler,
    handleThemeChange,
  };

  return (
    <ThemeContext.Provider value={{ value }}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
