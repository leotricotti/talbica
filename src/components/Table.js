import TableRow from "./TableRow";
import styles from "./table.module.css";

function Table({ dataFromApi, themeHandler }) {
  let prevPeriod;

  return (
    <div className={styles.tableWrapper}>
      <TableRow
        dataFromApi={dataFromApi}
        prevPeriod={prevPeriod}
        themeHandler={themeHandler}
      />
    </div>
  );
}

export default Table;
