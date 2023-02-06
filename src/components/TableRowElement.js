import useFormatMass from "../customHooks/useFormatMass";
import useTruncateName from "../customHooks/useFormatName";
import useFilterColor from "../customHooks/useFilterColor";
import useFormatColorName from "../customHooks/useFormatColorName";
import useFadeIn from "../customHooks/useFadeIn";
import useRandomDelay from "../customHooks/useRandomDelay";
import styles from "../css/tableRowElement.module.css";

function TableRowElement({ item, colors, handleClickCardModal }) {
  const displayMass = useFormatMass(item.atomicMass);
  const displayName = useTruncateName(item.name);
  const isFaded = useFadeIn(1);
  const randomDelay = useRandomDelay(null);
  const formattedColor = useFormatColorName(item.groupBlock);
  const backgroundColor = useFilterColor(formattedColor, colors);

  return (
    <button
      onClick={handleClickCardModal}
      className={`${styles.tableRowElement} ${isFaded ? styles.show : ""}`}
      style={{
        backgroundColor: `var(${backgroundColor})`,
        transitionDelay: `${randomDelay}`,
      }}
    >
      <span className={styles.atomicNumber}>{item.atomicNumber}</span>
      <span className={styles.symbol}>{item.symbol}</span>
      <span className={styles.name}>{displayName}</span>
      <span className={styles.atomicMass}>{displayMass}</span>
    </button>
  );
}

export default TableRowElement;
