import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import TableRow from "./TableRow";
import Loader from "./Loader";
import styles from "../css/table.module.css";

function Table() {
  const { tableData, error, isLoading } = useContext(DataContext).value;
  let prevPeriod;

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!tableData) {
    return <Loader />;
  }

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
