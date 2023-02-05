import TableRow from "./TableRow";
import Loader from "./Loader";
import styles from "../css/table.module.css";

function Table({ isLoading, dataFromApi }) {
  let prevPeriod;

  return (
    <main className={styles.tableWrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <TableRow dataFromApi={dataFromApi} prevPeriod={prevPeriod} />
      )}
    </main>
  );
}

export default Table;
