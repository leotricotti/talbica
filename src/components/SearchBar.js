import { useState } from "react";
import SearchBarHelp from "./SearchBarHelp";
import styles from "../css/searchBar.module.css";

function SearcBar() {
  const [showHelp, setShowHelp] = useState(false);

  const handleShowClick = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Type element name"
      />
      <button className={styles.helpIcon} onClick={handleShowClick}></button>
      {showHelp && <SearchBarHelp />}
    </div>
  );
}
export default SearcBar;
