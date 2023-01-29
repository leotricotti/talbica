import { useEffect, useState } from "react";
import usePrevious from "./usePrevius";
import styles from "../css/tableRowTitle.module.css";

function TableRowTitle({ period }) {
  const [periodNumber, setPeriodNumber] = useState([]);
  const previusPeriodNumber = usePrevious(periodNumber);

  console.log(previusPeriodNumber);

  useEffect(() => {
    setPeriodNumber(period);
  }, [period]);

  return (
    <div className={styles.title}>
      {previusPeriodNumber !== periodNumber ? <h3>Period {period}</h3> : ""}
    </div>
  );
}

export default TableRowTitle;
