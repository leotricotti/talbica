import { useEffect } from "react";
import TableRowElement from "./TableRowElement";
import styles from "../css/searchBarResults.module.css";

function SearchBarResults({ showInfo, colors, showResult }) {
  useEffect(() => {
    document.body.style.overflow = showResult ? "hidden" : "auto";
  }, [showResult]);

  return (
    <div
      className={`${styles.resultsContainer} ${
        !showResult ? styles.toTop : ""
      }`}
    >
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
