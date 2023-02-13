import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import useCutString from "../customHooks/useCutString";
import useFormatMass from "../customHooks/useFormatMass";
import styles from "../css/cardHeader.module.css";

function CardHeader({ dataFromApi, backgroundColor }) {
  const [showMoreOpen, setShowMoreOpen] = useState(false);
  const item = dataFromApi;
  const history = useCutString(item.history);
  const formatMass = useFormatMass(item.atomicMass);
  const handleClick = () => {
    setShowMoreOpen(true);
  };

  return (
    <div key={item.atomicNumber} className={styles.cardlHeaderContainer}>
      <span className={styles.atomicNumber}>{item.atomicNumber}</span>
      <span className={styles.symbol}>{item.symbol}</span>
      <span className={styles.name}>{item.name}</span>
      <span className={styles.atomicMass}>{formatMass}</span>
      <p
        className={`${styles.description} ${
          !showMoreOpen ? styles.maskText : ""
        }`}
      >
        {history}
      </p>
      <div
        className={styles.cardBtnContainer}
        style={{
          backgroundColor: `var(${backgroundColor})`,
        }}
      >
        <button
          className={`${!showMoreOpen ? styles.cardBtn : styles.displayNone}`}
          onClick={handleClick}
        >
          Show more
        </button>
      </div>
    </div>
  );
}

export default CardHeader;
