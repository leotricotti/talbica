import styles from "../css/tableRowTitle.module.css";

function TableRowTitle({ period }) {
  return <h3 className={styles.title}>Period {period}</h3>;
}

export default TableRowTitle;
