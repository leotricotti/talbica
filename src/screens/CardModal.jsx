import { useState } from "react";
import CardModalHeader from "../components/CardModalHeader";
import styles from "../css/cardModal.module.css";

function CardModal({ show }) {
  const [closeModal, setCloseModal] = useState(false);

  function closeCardModal() {
    setCloseModal(!closeModal);
  }

  return (
    <div className={show ? styles.showCard : styles.hideCard}>
      <CardModalHeader handleClick={closeCardModal} />
    </div>
  );
}

export default CardModal;
