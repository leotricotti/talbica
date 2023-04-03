import { useState } from "react";
import useCutString from "../customHooks/useCutString";
import useFormatMass from "../customHooks/useFormatMass";
import styles from "./cardHeader.module.css";

function CardHeader({ dataFromApi, backgroundColor }) {
  const [showMoreOpen, setShowMoreOpen] = useState(false);
  const history = useCutString(dataFromApi.history);
  const formatMass = useFormatMass(dataFromApi.atomicMass);

  const handleClick = () => {
    setShowMoreOpen(true);
  };

  return (
    <div key={dataFromApi.atomicNumber} className={styles.cardlHeaderContainer}>
      <span className={styles.atomicNumber}>{dataFromApi.atomicNumber}</span>
      <span className={styles.symbol}>{dataFromApi.symbol}</span>
      <span className={styles.name}>{dataFromApi.name}</span>
      <span className={styles.atomicMass}>{formatMass}</span>
      <p
        className={`${styles.description} ${
          !showMoreOpen ? styles.maskText : styles.maskTextOpen
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
          id="button"
          className={`${styles.cardBtn}  ${
            showMoreOpen ? styles.displayNone : ""
          }`}
          onClick={handleClick}
        >
          Show more
        </button>
      </div>
    </div>
  );
}

export default CardHeader;
