import CardModalHeader from "../components/CardModalHeader";
import styles from "../css/cardModal.module.css";

function CardModal({ dataFromApi, showModal }) {
  return (
    <div className={showModal ? styles.showCard : styles.hideCard}>
      <CardModalHeader dataFromApi={dataFromApi} />
    </div>
  );
}

export default CardModal;
