import { useState, createContext } from "react";

const PhotoThemeContext = createContext();

function PhotoThemeprovider({ children }) {
  const [photoTheme, setPhotoTheme] = useState([]);

  const value = {
    photoTheme,
    setPhotoTheme,
  };

  return (
    <PhotoThemeContext.Provider value={{ value }}>
      {children}
    </PhotoThemeContext.Provider>
  );
}

export { PhotoThemeContext, PhotoThemeprovider };
