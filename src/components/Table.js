import TableRow from "./TableRow";
import Loader from "./Loader";
import styles from "../css/table.module.css";

function Table({ isLoading, tableData }) {
  let prevPeriod;

  return (
    <main className={styles.tableWrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <TableRow dataFromApi={tableData} prevPeriod={prevPeriod} />
      )}
    </main>
  );
}

export default Table;
