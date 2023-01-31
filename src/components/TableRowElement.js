import useFormatMass from "../customHooks/useFormatMass";
import useTruncateName from "../customHooks/useFormatName";
import useFilterColor from "../customHooks/useFilterColor";
import styles from "../css/tableRowElement.module.css";

function TableRowElement({ item, color }) {
  const displayMass = useFormatMass(item.atomicMass);
  const displayName = useTruncateName(item.name);
  const backgroundColor = useFilterColor(item.blockColor, color);

  return (
    <div
      className={styles.tableElement}
      style={{ backgroundColor: backgroundColor?.color }}
    >
      <span className={styles.atomicNumber}>{item.atomicNumber}</span>
      <span className={styles.symbol}>{item.symbol}</span>
      <span className={styles.name}>{displayName}</span>
      <span className={styles.atomicMass}>{displayMass}</span>
    </div>
  );
}

export default TableRowElement;
