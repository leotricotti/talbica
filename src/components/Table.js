import TableRowTitle from "./TableRowTitle";
import styles from "../css/table.module.css";

function Table({ data }) {
  return (
    <main className={styles.tableWrapper}>
      {data.map((item) => (
        <div className={styles.table} key={item.atomicNumber}>
          <div className={styles.tableRow}>
            <TableRowTitle period={item.period} />
            <div className={styles.tableElement}>
              <span className={styles.atomicNumber}>{item.atomicNumber}</span>
              <span className={styles.symbol}>{item.symbol}</span>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.atomicMass}>{item.atomicMass}</span>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Table;
