import { useState, useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import { tableColors } from "../assets/data/tableColors";
import SearchBarResults from "./SearchBarResult";
import SearchBarHelp from "./SearchBarHelp";
import styles from "./searchBar.module.css";

function Input({ id, searchValue, handleInputChange }) {
  return (
    <input
      className={styles.searchBar}
      type="text"
      value={searchValue}
      onChange={handleInputChange}
      placeholder="Type element to search"
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
    toTop,
    clearInput,
    searchValue,
    setSearchValue,
    showInfo,
    setShowInfo,
  } = useContext(StylesContext).value;
  const [showCard, setShowCard] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleClick = () => {
    updateOverflow();
    clearInput();
    setShowCard(!showCard);
    updateToTop();
    setShowHelp(!showHelp);
  };

  const handleShowHelp = () => {
    setShowHelp(!showHelp);
    updateOverflow();
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 0) {
      setShowInfo([]);
    }

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
          handleInputChange={handleInputChange}
        />
        <Button handleClick={handleClick} />
      </div>
      {showInfo.length > 0 && showInfo.length < 118 && (
        <SearchBarResults
          showInfo={showInfo}
          colors={colors}
          showResult={showCard}
          toTop={toTop}
        />
      )}
    </>
  );
}

export default SearcBar;
