import useFormatMass from "../customHooks/useFormatMass";
import useTruncateName from "../customHooks/useFormatName";
import styles from "../css/tableRowElement.module.css";

function TableRowElement({ item }) {
  const displayMass = useFormatMass(item.atomicMass);
  const displayName = useTruncateName(item.name);

  return (
    <div className={styles.tableElement}>
      <span className={styles.atomicNumber}>{item.atomicNumber}</span>
      <span className={styles.symbol}>{item.symbol}</span>
      <span className={styles.name}>{displayName}</span>
      <span className={styles.atomicMass}>{displayMass}</span>
    </div>
  );
}

export default TableRowElement;
