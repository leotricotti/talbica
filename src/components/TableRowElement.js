import useFormatMass from "../customHooks/useFormatMass";
import useTruncateName from "../customHooks/useFormatName";
import useFilterColor from "../customHooks/useFilterColor";
import useFormatColorName from "../customHooks/useFormatColorName";
import styles from "../css/tableRowElement.module.css";

function TableRowElement({ item, colors }) {
  const displayMass = useFormatMass(item.atomicMass);
  const displayName = useTruncateName(item.name);
  const formattedColor = useFormatColorName(item.groupBlock);
  const backgroundColor = useFilterColor(formattedColor, colors);

  console.log(formattedColor);

  return (
    <div
      className={styles.tableRowElement}
      style={{ backgroundColor: `var(${backgroundColor})` }}
    >
      <span className={styles.atomicNumber}>{item.atomicNumber}</span>
      <span className={styles.symbol}>{item.symbol}</span>
      <span className={styles.name}>{displayName}</span>
      <span className={styles.atomicMass}>{displayMass}</span>
    </div>
  );
}

export default TableRowElement;
