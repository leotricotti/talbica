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
        <div>
          {cachedData.map((item, index) => {
            if (prevPeriod !== item.period) {
              prevPeriod = item.period;
              return (
                <div key={item.period}>
                  <TableRowTitle period={item.period} item={item} />
                  <div>
                    {cachedData
                      .filter((i) => i.period === item.period)
                      .map((i) => (
                        <TableRow key={i.name} item={i} />
                      ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </main>
  );
}

export default Table;
