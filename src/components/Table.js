import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import TableRow from "./TableRow";
import Spinner from "./Spinner";
import styles from "../css/tableRow.module.css";

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

  console.log(cachedData);

  return (
    <main className={styles.tableWrapper}>
      {isLoading ? (
        <Spinner />
      ) : (
        <TableRow dataFromApi={cachedData} prevPeriod={prevPeriod} />
      )}
    </main>
  );
}

export default Table;
