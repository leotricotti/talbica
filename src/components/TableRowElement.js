import useFormatMass from "../customHooks/useFormatMass";
import useTruncateName from "../customHooks/useFormatName";
import useFilterColor from "../customHooks/useFilterColor";
import useFormatColorName from "../customHooks/useFormatColorName";
import useFadeIn from "../customHooks/useFadeIn";
import useRandomDelay from "../customHooks/useRandomDelay";
import styles from "../css/tableRowElement.module.css";

function TableRowElement({ item, colors }) {
  const displayMass = useFormatMass(item.atomicMass);
  const displayName = useTruncateName(item.name);
  const isFaded = useFadeIn(0);
  const formattedColor = useFormatColorName(item.groupBlock);
  const backgroundColor = useFilterColor(formattedColor, colors);
  const randomDelayNumber = useRandomDelay("");

  return (
    <div
      className={`${styles.tableRowElement} ${isFaded ? styles.show : ""}`}
      style={{
        backgroundColor: `var(${backgroundColor})`,
        animationDelay: `${randomDelayNumber}`,
      }}
    >
      <span className={styles.atomicNumber}>{item.atomicNumber}</span>
      <span className={styles.symbol}>{item.symbol}</span>
      <span className={styles.name}>{displayName}</span>
      <span className={styles.atomicMass}>{displayMass}</span>
    </div>
  );
}

export default TableRowElement;
