import CardModalHeader from "./CardModalHeader";
import styles from "../css/cardModal.module.css";

function CardModal({ dataFromApi, show, closeBtn }) {
  return (
    <div className={show ? styles.showCard : styles.hideCard}>
      <CardModalHeader dataFromApi={dataFromApi} closeBtn={closeBtn} />
    </div>
  );
}

export default CardModal;
