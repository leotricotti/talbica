import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import TableRow from "./TableRow";
import TableRowTitle from "./TableRowTitle";
import Spinner from "./Spinner";
import styles from "../css/table.module.css";

function Table() {
  const { cachedData, error, isLoading } = useContext(DataContext).value;
  let prevPeriod;

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!cachedData) {
    return <Spinner />;
  }

  return (
    <main className={styles.tableWrapper}>
      {isLoading ? (
        <Spinner />
      ) : (
        cachedData.map((item) => {
          if (prevPeriod !== item.period) {
            prevPeriod = item.period;
            return (
              <div key={item.name}>
                <TableRowTitle period={item.period} item={item} />
                <TableRow item={item} />
              </div>
            );
          } else {
            return (
              <div key={item.name}>
                <TableRow item={item} />
              </div>
            );
          }
        })
      )}
    </main>
  );
}

export default Table;
