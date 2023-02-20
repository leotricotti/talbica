import { useState, useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import tableColors from "../assets/data/tableColors";
import SearchBarResults from "./SearchBarResult";
import SearchBarHelp from "./SearchBarHelp";
import styles from "../css/searchBar.module.css";

function SearcBar({ dataFromApi }) {
  const { updateOverflow } = useContext(StylesContext).value;
  const colors = tableColors.map((color) => {
    return color;
  });
  const [showHelp, setShowHelp] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showInfo, setShowInfo] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleShowClick = () => {
    setShowHelp(!showHelp);
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

  return (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Type element name"
        value={searchValue}
        onChange={handleInputChange}
      />
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
