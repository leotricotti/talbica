import { useState, useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import { tableColors } from "../assets/data/tableColors";
import SearchBarResults from "./SearchBarResult";
import SearchBarHelp from "./SearchBarHelp";
import styles from "./searchBar.module.css";

function Input({ searchValue, caretPosition, handleInputChange }) {
  return (
    <>
      <span className={styles.caret} style={{ left: `${caretPosition}px` }}>
        |
      </span>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Type element name"
        value={searchValue}
        onChange={handleInputChange}
      />
    </>
  );
}

function Button({ handleClick }) {
  return <button className={styles.helpIcon} onClick={handleClick} />;
}

function SearcBar({ dataFromApi }) {
  const colors = tableColors.map((color) => {
    return color;
  });
  const {
    updateOverflow,
    updateToTop,
    clearInput,
    searchValue,
    setSearchValue,
    showInfo,
    setShowInfo,
  } = useContext(StylesContext).value;
  const [showCard, setShowCard] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [caretPosition, setCaretPosition] = useState(parseInt(0));

  const handleClick = () => {
    updateOverflow();
    clearInput();
    setShowCard(!showCard);
    updateToTop();
    setShowHelp(!showHelp);
  };

  const handleShowHelp = () => setShowHelp(!showHelp);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCaretPosition(inputValue.length * 12);
    setSearchValue(inputValue);
    const filteredData = dataFromApi.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setShowInfo(filteredData);
  };

  return (
    <>
      <SearchBarHelp handleShowHelp={handleShowHelp} showHelp={showHelp} />
      <div className={styles.searchBarContainer}>
        <Input
          searchValue={searchValue}
          caretPosition={caretPosition}
          handleInputChange={handleInputChange}
        />
        <Button handleClick={handleClick} />
        {showCard.length > 0 && (
          <SearchBarResults
            showInfo={showInfo}
            colors={colors}
            showResult={showCard}
          />
        )}
      </div>
    </>
  );
}

export default SearcBar;
