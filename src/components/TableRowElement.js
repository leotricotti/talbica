import { useState } from "react";
import useFormatMass from "../customHooks/useFormatMass";
import useTruncateName from "../customHooks/useFormatName";
import useFilterColor from "../customHooks/useFilterColor";
import useFormatColorName from "../customHooks/useFormatColorName";
import useFadeIn from "../customHooks/useFadeIn";
import useRandomDelay from "../customHooks/useRandomDelay";
import Card from "./Card";
import styles from "../css/tableRowElement.module.css";

function TableRowElement({ item, colors }) {
  const [selectedElement, setSelectedElement] = useState(false);
  const displayMass = useFormatMass(item.atomicMass);
  const displayName = useTruncateName(item.name);
  const isFaded = useFadeIn(1);
  const randomDelay = useRandomDelay(null);
  const formattedColor = useFormatColorName(item.groupBlock);
  const backgroundColor = useFilterColor(formattedColor, colors);

  const handleClick = () => {
    setSelectedElement(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
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
      {selectedElement && (
        <Card
          dataFromApi={item}
          onClose={() => setSelectedElement(false)}
          backgroundColor={backgroundColor}
          selectedElement={selectedElement}
        />
      )}
    </>
  );
}

export default TableRowElement;
