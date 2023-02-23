import { useState, createContext } from "react";

const PhotoModeContext = createContext();

function PhotoModeProvider({ children }) {
  const [photoMode, setPhotoMode] = useState([]);

  const handlePhotoMode = (id) => {
    if (id === 2) {
      setPhotoMode(true);
    } else {
      setPhotoMode(false);
    }
  };

  const value = {
    photoMode,
    handlePhotoMode,
  };

  return (
    <PhotoModeContext.Provider value={{ value }}>
      {children}
    </PhotoModeContext.Provider>
  );
}

export { PhotoModeContext, PhotoModeProvider };
