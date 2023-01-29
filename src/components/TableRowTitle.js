import { useEffect, useState, useRef } from "react";
import styles from "../css/tableRowTitle.module.css";

function TableRowTitle({ period }) {
  const [periodNumber, setPeriodNumber] = useState("");
  const prevPeriodNumberRef = useRef();

  useEffect(() => {
    prevPeriodNumberRef.current = periodNumber;
    setPeriodNumber(period);
  }, [periodNumber, period]);

  console.log(prevPeriodNumberRef.current, periodNumber);

  return (
    <div className={styles.title}>
      {prevPeriodNumberRef !== periodNumber ? <h3>Period {period}</h3> : ""}
    </div>
  );
}

export default TableRowTitle;
