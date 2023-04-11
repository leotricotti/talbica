import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [themeHandler, setThemeHandler] = useState(false);
  const [cardThemeHandler, setCardThemeHandler] = useState(false);

  const handleThemeChange = (id) => {
    if (id === 2) {
      setThemeHandler(true);
      setCardThemeHandler(true);
    } else {
      setThemeHandler(false);
      setCardThemeHandler(false);
    }
  };

  const handleCardThemeChange = () => {
    setCardThemeHandler(!cardThemeHandler);
  };

  const value = {
    themeHandler,
    handleThemeChange,
    cardThemeHandler,
    handleCardThemeChange,
  };

  return (
    <ThemeContext.Provider value={{ value }}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
