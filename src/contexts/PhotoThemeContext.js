import { useState, createContext } from "react";

const PhotoThemeContext = createContext();

function PhotoThemeprovider({ children }) {
  const [photoTheme, setPhotoTheme] = useState([]);

  const handlePhotoTheme = (id) => {
    if (id === 2) {
      setPhotoTheme(true);
    } else {
      setPhotoTheme(false);
    }
  };

  const value = {
    photoTheme,
    setPhotoTheme,
    handlePhotoTheme,
  };

  return (
    <PhotoThemeContext.Provider value={{ value }}>
      {children}
    </PhotoThemeContext.Provider>
  );
}

export { PhotoThemeContext, PhotoThemeprovider };
