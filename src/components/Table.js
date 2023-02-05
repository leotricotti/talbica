import TableRow from "./TableRow";
import Loader from "./Loader";
import styles from "../css/table.module.css";

function Table({ isLoading, dataFromApi }) {
  let prevPeriod;

  return (
    <div className={styles.tableWrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <TableRow dataFromApi={dataFromApi} prevPeriod={prevPeriod} />
      )}
    </div>
  );
}

export default Table;
