import styles from "../css/searchBarHelp.module.css";

function SearchBarHelp() {
  return (
    <div className={styles.helpContainer}>
      <h3 className={styles.title}>Search by name</h3>
      <p className={styles.text}>
        Type a compound name in the search field. If the compound is found, the
        App will display its component.
      </p>
    </div>
  );
}

export default SearchBarHelp;
