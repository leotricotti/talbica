import { createContext, useState, useEffect } from "react";

export const StylesContext = createContext();

export const StylesProvider = ({ children }) => {
  const [overflow, setOverflow] = useState(false);
  const [toTop, setToTop] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showInfo, setShowInfo] = useState([]);

  useEffect(() => {
    document.body.style.overflow = overflow ? "hidden" : "auto";
  }, [overflow]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [toTop]);

  const updateOverflow = () => {
    setOverflow(!overflow);
  };

  const updateToTop = () => {
    setToTop(!toTop);
  };

  const clearInput = () => {
    setSearchValue("");
    setShowInfo([]);
  };

  const value = {
    updateOverflow,
    updateToTop,
    toTop,
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
