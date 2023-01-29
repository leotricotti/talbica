import { useEffect, useState } from "react";
import styles from "../css/tableRowTitle.module.css";

function TableRowTitle({ period }) {
  const [periodNumber, setPeriodNumber] = useState([]);

  useEffect(() => {
    setPeriodNumber(period);
  }, [period]);

  return (
    <div className={styles.title}>
      {period !== periodNumber ? <h3>Period {period}</h3> : ""}
    </div>
  );
}

export default TableRowTitle;
