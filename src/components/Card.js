import { useState, useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import CardHeader from "./CardHeader";
import CardBody from "./CarBody";
import CardModeSwitcher from "./CardModeSwitcher";
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

  function Overlay() {
    return (
      <div
        className={`${styles.overlay} ${
          showCard ? styles.overlayOpen : styles.overlayClose
        }`}
      ></div>
    );
  }

  function CloseBtn() {
    return (
      <button className={styles.closeBtn} onClick={handleClose}>
        <div className={styles.closeIcon}></div>
      </button>
    );
  }

  return (
    <>
      <Overlay />
      <div
        className={`${styles.cardContainer} ${
          showCard ? styles.cardOpen : styles.cardClose
        }`}
        style={{
          backgroundColor: `var(${backgroundColor})`,
        }}
      >
        <CloseBtn />
        <CardHeader
          dataFromApi={dataFromApi}
          backgroundColor={backgroundColor}
        />
        <CardBody dataFromApi={dataFromApi} />
        <CardModeSwitcher />
      </div>
    </>
  );
}

export default Card;
