import TableRowElement from "./TableRowElement";
import styles from "./searchBarResults.module.css";

function SearchBarResults({ toTop, showInfo, colors }) {
  return (
    <div className={`${styles.resultsContainer} ${toTop ? styles.toTop : ""}`}>
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
