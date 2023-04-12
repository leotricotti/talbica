import { createContext, useState, useEffect } from "react";

export const StylesContext = createContext();

export const StylesProvider = ({ children }) => {
  const [overflow, setOverflow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showInfo, setShowInfo] = useState([]);

  useEffect(() => {
    document.body.style.overflow = overflow ? "hidden" : "auto";
  }, [overflow]);

  const updateOverflow = (value) => {
    setOverflow(value);
  };

  const clearInput = () => {
    setSearchValue("");
    setShowInfo([]);
  };

  const value = {
    updateOverflow,
    overflow,
    clearInput,
    searchValue,
    setSearchValue,
    showInfo,
    setShowInfo,
  };

  return (
    <StylesContext.Provider value={{ value }}>
      {children}
    </StylesContext.Provider>
  );
};
