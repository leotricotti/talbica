import { useState, useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import { tableColors } from "../assets/data/tableColors";
import SearchBarResults from "./SearchBarResult";
import SearchBarHelp from "./SearchBarHelp";
import styles from "../css/searchBar.module.css";

function Caret() {
  return <div className={styles.caret} />;
}

function Input({ searchValue, handleInputChange }) {
  return (
    <input
      className={styles.searchBar}
      type="text"
      placeholder="Type element name"
      value={searchValue}
      onChange={handleInputChange}
    />
  );
}

function Button({ handleShowClick }) {
  return <button className={styles.helpIcon} onClick={handleShowClick} />;
}

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
  const [isAnimated, setIsAnimated] = useState(false);

  const handleClickShowHelp = () => {
    setTimeout(() => {
      handleShowClick();
    }, 300);
    setIsAnimated(false);
  };

  const handleShowClick = () => {
    setShowHelp(!showHelp);
    clearInput();
    updateOverflow();
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setShowResult(true);
    setSearchValue(inputValue);
    const filteredData = dataFromApi.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setShowInfo(filteredData);
  };

  const handleCaretPosition = (e) => {
    const caretPosition = e.target.selectionStart;
    updateOverflow(caretPosition);
  };

  return (
    <div className={styles.searchBarContainer}>
      <Caret />
      <Input searchValue={searchValue} handleInputChange={handleInputChange} />
      <Button handleShowClick={handleShowClick} />
      {showHelp && (
        <SearchBarHelp
          handleClickShowHelp={handleClickShowHelp}
          isAnimated={isAnimated}
        />
      )}
      {showInfo.length > 0 && (
        <SearchBarResults
          showInfo={showInfo}
          colors={colors}
          showResult={showResult}
        />
      )}
    </div>
  );
}

export default SearcBar;
