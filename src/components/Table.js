import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import TableRowTitle from "./TableRowTitle";
import Spinner from "./Spinner";
import styles from "../css/table.module.css";

function Table() {
  const { cachedData, error, isLoading } = useContext(DataContext).value;
  let previusPeriod;

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className={styles.tableWrapper}>
      {isLoading ? (
        <Spinner />
      ) : (
        cachedData.map((item) => {
          if (previusPeriod !== item.period) {
            previusPeriod = item.period;
            return (
              <div key={item.period}>
                <TableRowTitle period={item.period} />
                <div className={styles.table} key={item.atomicNumber}>
                  <div className={styles.tableRow}>
                    <div className={styles.tableElement}>
                      <span className={styles.atomicNumber}>
                        {item.atomicNumber}
                      </span>
                      <span className={styles.symbol}>{item.symbol}</span>
                      <span className={styles.name}>{item.name}</span>
                      <span className={styles.atomicMass}>
                        {item.atomicMass}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className={styles.table} key={item.atomicNumber}>
                <div className={styles.tableRow}>
                  <div className={styles.tableElement}>
                    <span className={styles.atomicNumber}>
                      {item.atomicNumber}
                    </span>
                    <span className={styles.symbol}>{item.symbol}</span>
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.atomicMass}>{item.atomicMass}</span>
                  </div>
                </div>
              </div>
            );
          }
        })
      )}
    </main>
  );
}

export default Table;
