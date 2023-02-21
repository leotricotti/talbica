import { useState, useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import CardHeader from "./CardHeader";
import CardBody from "./CarBody";
import styles from "../css/card.module.css";

function Card({ dataFromApi, backgroundColor, onClose }) {
  const { updateOverflow, clearInput } = useContext(StylesContext).value;
  const [showCard, setShowCard] = useState(true);

  const handleClose = () => {
    setTimeout(() => {
      onClose();
    }, 300);
    setShowCard(false);
    updateOverflow();
    clearInput();
  };

  return (
    <>
      <div
        className={`${styles.cardOverlay} ${
          showCard ? styles.overlayOpen : ""
        }`}
      ></div>
      <div
        className={`${styles.cardContainer} ${
          showCard ? styles.cardOpen : styles.cardClose
        }`}
        style={{
          backgroundColor: `var(${backgroundColor})`,
        }}
      >
        <button className={styles.closeBtn} onClick={handleClose}>
          <span className={styles.closeIcon}>x</span>
        </button>
        <CardHeader
          dataFromApi={dataFromApi}
          backgroundColor={backgroundColor}
        />
        <CardBody dataFromApi={dataFromApi} />
      </div>
    </>
  );
}

export default Card;
