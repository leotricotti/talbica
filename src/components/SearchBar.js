import { useState, useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import { tableColors } from "../assets/data/tableColors";
import SearchBarResults from "./SearchBarResult";
import SearchBarHelp from "./SearchBarHelp";
import styles from "../css/searchBar.module.css";

function SearcBar({ dataFromApi }) {
  const colors = tableColors.map((color) => {
    return color;
  });
  const {
    updateOverflow,
    clearInput,
    searchValue,
    setSearchValue,
    showInfo,
    setShowInfo,
  } = useContext(StylesContext).value;
  const [showHelp, setShowHelp] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleShowClick = () => {
    setShowHelp(!showHelp);
    clearInput();
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setShowResult(true);
    setSearchValue(inputValue);
    updateOverflow();
    const filteredData = dataFromApi.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setShowInfo(filteredData);
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Type element name"
        value={searchValue}
        onChange={handleInputChange}
      />
      <div className={styles.caret}></div>
      <button className={styles.helpIcon} onClick={handleShowClick}></button>
      {showHelp && (
        <div className={styles.helpContainer}>
          <SearchBarHelp handleClose={handleShowClick} showHelp={showHelp} />
        </div>
      )}
      {showInfo.length > 0 && (
        <>
          <SearchBarResults
            showInfo={showInfo}
            colors={colors}
            showResult={showResult}
          />
        </>
      )}
    </div>
  );
}

export default SearcBar;
