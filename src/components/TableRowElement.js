import styles from "../css/tableRowElement.module.css";

function TableRowElement({ item }) {
  return (
    <div className={styles.tableElement}>
      <span className={styles.atomicNumber}>{item.atomicNumber}</span>
      <span className={styles.symbol}>{item.symbol}</span>
      <span className={styles.name}>{item.name}</span>
      <span className={styles.atomicMass}>{item.atomicMass}</span>
    </div>
  );
}

export default TableRowElement;
