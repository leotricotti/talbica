import SearcBar from "./SearchBar";
import styles from "../css/searchBarSection.module.css";

function SearchBarSection() {
  return (
    <div className={styles.searchContainer}>
      <SearcBar />
    </div>
  );
}

export default SearchBarSection;
