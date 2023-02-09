import SearcBar from "./SearchBar";
import SearchBarHelp from "./SearchBarHelp";
import styles from "../css/seachBarSection.module.css";

function SearchBarSection() {
  return (
    <div className={styles.searchContainer}>
      <SearcBar />
      <SearchBarHelp />
    </div>
  );
}

export default SearchBarSection;
