import styles from "../css/tableRowTitle.module.css";

function TableRowTitle({ period }) {
  return (
    <div>
      <h3 className={styles.title}>Period {period}</h3>
    </div>
  );
}

export default TableRowTitle;
