import styles from "../css/tableRowTitle.module.css";

function TableRowTitle({ period }) {
  return (
    <div className={styles.title}>
      <h3>Period {period}</h3>
    </div>
  );
}

export default TableRowTitle;
