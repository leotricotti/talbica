import { useState, useEffect } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CarBody";
import ModeSwitcherMobile from "./ModeSwitcherMobile";
import styles from "../css/card.module.css";

function Card({ dataFromApi, backgroundColor, onClose, selectedElement }) {
  const [showCard, setShowCard] = useState(true);

  useEffect(() => {
    document.body.style.overflow = showCard ? "hidden" : "auto";
    document.documentElement.scrollTop = 0;
  }, [showCard]);

  console.log(showCard);

  const handleClose = () => {
    setTimeout(() => {
      onClose();
    }, 300);
    setShowCard(false);
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
          selectedElement={selectedElement}
        />
        <CardBody dataFromApi={dataFromApi} />
      </div>
      <ModeSwitcherMobile />
    </>
  );
}

export default Card;
