import styles from "../css/cardModalHeader.module.css";

function CardModalHeader({ item, closeBtn }) {
  return (
    <div className={styles.CardModalHeader}>
      <button className={styles.closeBtn} onClick={closeBtn}>
        <span>X</span>
      </button>
      <span className={styles.atomicNumber}>{item.atomicNumber}</span>
      <span className={styles.symbol}>{item.symbol}</span>
      <span className={styles.name}>{item.nameame}</span>
      <span className={styles.atomicMass}>{item.atomicMass}</span>
      <p className={styles.description}></p>
    </div>
  );
}

export default CardModalHeader;
