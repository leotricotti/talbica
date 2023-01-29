import usePrevious from "../customHooks/usePrevius";
import styles from "../css/tableRowTitle.module.css";

function TableRowTitle({ period }) {
  const previusPeriod = usePrevious(period);

  return (
    <div className={styles.title}>
      {previusPeriod !== period ? <h3>Period {period}</h3> : ""}
    </div>
  );
}

export default TableRowTitle;
