import CardHeader from "./CardHeader";
import styles from "../css/card.module.css";

function Card({ dataFromApi, backgroundColor, onClose }) {
  return (
    <div
      className={styles.cardModalContainer}
      style={{
        backgroundColor: `var(${backgroundColor})`,
      }}
    >
      <button className={styles.closeBtn} onClick={onClose}>
        <span className={styles.closeIcon}>x</span>
      </button>
      <CardHeader dataFromApi={dataFromApi} backgroundColor={backgroundColor} />
    </div>
  );
}

export default Card;
