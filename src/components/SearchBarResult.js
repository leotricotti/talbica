import { useState } from "react";
import TableRowElement from "./TableRowElement";
import styles from "../css/searchBarResults.module.css";

function SearchBarResults({ showInfo, colors }) {
  const [showCard, setShowCard] = useState(false);

  if (showCard) {
    document.body.style.overflow = "hidden";
  }

  console.log(showCard);

  return (
    <div
      className={`${styles.resultsContainer} ${showCard ? styles.toTop : ""}`}
    >
      {showInfo.map((item) => {
        return (
          <ul key={item.atomicNumber}>
            <li key={item.atomicNumber}>
              <TableRowElement
                key={item.atomicNumber}
                item={item}
                colors={colors}
                setShowCard={setShowCard}
              />
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default SearchBarResults;
