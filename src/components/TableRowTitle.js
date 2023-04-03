import styles from "./tableRowTitle.module.css";

function TableRowTitle({ period, groupBlock }) {
  return groupBlock === "lanthanoid" || groupBlock === "actinoid" ? (
    <h3 className={`${styles.groupTitle} ${styles.title}`}>
      {groupBlock + "s"}
    </h3>
  ) : (
    <h3 className={styles.title}>Period {period}</h3>
  );
}

export default TableRowTitle;
