import styles from "../css/searchBar.module.css";

function SearcBar() {
  return (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Type element name"
      />
      <div className={styles.helpIcon}></div>
    </div>
  );
}

export default SearcBar;
