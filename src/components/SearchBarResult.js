import { useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import TableRowElement from "./TableRowElement";
import styles from "../css/searchBarResults.module.css";

function SearchBarResults({ showInfo, colors }) {
  const { toTop } = useContext(StylesContext).value;

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
