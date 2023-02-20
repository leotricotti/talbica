import TableRowElement from "./TableRowElement";
import styles from "../css/searchBarResults.module.css";

function SearchBarResults({ showInfo, colors }) {
  return (
    <div className={styles.resultsContainer}>
      {showInfo.map((item) => {
        return (
          <div key={item.atomicNumber} className={styles.element}>
            <TableRowElement
              key={item.atomicNumber}
              item={item}
              colors={colors}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SearchBarResults;
