import { useState, useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import { tableColors } from "../assets/data/tableColors";
import SearchBarResults from "./SearchBarResult";
import SearchBarHelp from "./SearchBarHelp";
import styles from "../css/searchBar.module.css";

function Caret() {
  return <div className={styles.caret} />;
}

function Input({ searchValue, handleInputChange, handleKeyUp }) {
  return (
    <input
      className={styles.searchBar}
      type="text"
      placeholder="Type element name"
      value={searchValue}
      onChange={handleInputChange}
      onKeyUp={handleKeyUp}
    />
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

  const handleClick = () => {
    updateOverflow();
    clearInput();
    setShowCard(!showCard);
    updateToTop();
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    const filteredData = dataFromApi.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setShowInfo(filteredData);
  };

  return (
    <div className={styles.searchBarContainer}>
      <Caret />
      <Input searchValue={searchValue} handleInputChange={handleInputChange} />
      <Button handleClick={handleClick} />
      {showCard && <SearchBarHelp handleClickShowHelp={handleClick} />}
      {showCard.length > 0 && (
        <SearchBarResults
          showInfo={showInfo}
          colors={colors}
          showResult={showCard}
        />
      )}
    </div>
  );
}

export default SearcBar;
