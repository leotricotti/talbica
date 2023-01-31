import styles from "../css/tableRow.module.css";

function TableRow({ item }) {
  return (
    <div className={styles.tableRow} key={item.atomicNumber}>
      <div className={styles.tableElement}>
        <span className={styles.atomicNumber}>{item.atomicNumber}</span>
        <span className={styles.symbol}>{item.symbol}</span>
        <span className={styles.name}>{item.name}</span>
        <span className={styles.atomicMass}>{item.atomicMass}</span>
      </div>
    </div>
  );
}

export default TableRow;
