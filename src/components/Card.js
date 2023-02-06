import CardHeader from "./CardHeader";
import styles from "../css/card.module.css";

function CardModal({ dataFromApi, onClose }) {
  return (
    <div className={styles.cardModalContainer}>
      <button className={styles.closeBtn} onClick={onClose}>
        <span className={styles.closeIcon}>x</span>
      </button>
      <CardHeader dataFromApi={dataFromApi} />
    </div>
  );
}

export default CardModal;
