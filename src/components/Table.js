import TableRow from "./TableRow";
import Loader from "./Loader";
import styles from "./table.module.css";

function Table({ isLoading, dataFromApi, themeHandler }) {
  let prevPeriod;

  return (
    <div className={styles.tableWrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <TableRow
          dataFromApi={dataFromApi}
          prevPeriod={prevPeriod}
          themeHandler={themeHandler}
        />
      )}
    </div>
  );
}

export default Table;
