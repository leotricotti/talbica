import { useState } from "react";
import CardModalHeader from "./CardModalHeader";
import styles from "../css/cardModal.module.css";

function CardModal({ dataFromApi, showModal }) {
  const [closeModal, setCloseModal] = useState(false);

  function closeCardModal() {
    setCloseModal(!closeModal);
  }

  return (
    <div className={showModal ? styles.showCard : styles.hideCard}>
      <CardModalHeader dataFromApi={dataFromApi} handleClick={closeCardModal} />
    </div>
  );
}

export default CardModal;
