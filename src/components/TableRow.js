import styles from "../css/tableRow.module.css";

function TableRow(item) {
  return (
    <div className={styles.table} key={item.atomicNumber}>
      <div className={styles.tableRow}>
        <div className={styles.tableElement}>
          <span className={styles.atomicNumber}>{item.atomicNumber}</span>
          <span className={styles.symbol}>{item.symbol}</span>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.atomicMass}>{item.atomicMass}</span>
        </div>
      </div>
    </div>
  );
}

export default TableRow;
