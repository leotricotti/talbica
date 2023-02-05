import styles from "../css/cardModalHeader.module.css";

function CardModalHeader({ item }) {
  return (
    <div className={styles.CardModalHeader}>
      <span className={styles.atomicNumber}>{item.atomicNumber}</span>
      <span className={styles.symbol}>{item.symbol}</span>
      <span className={styles.name}>{item.nameame}</span>
      <span className={styles.atomicMass}>{item.atomicMass}</span>
      <p className={styles.description}></p>
    </div>
  );
}

export default CardModalHeader;
