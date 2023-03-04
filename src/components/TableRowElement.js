import { useState, useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import { hoverColors } from "../assets/data/tableColors";
import elementImages from "../assets/data/elementImages";
import useFormatColorHover from "../customHooks/useFormatColorHover";
import useFormatMass from "../customHooks/useFormatMass";
import useTruncateName from "../customHooks/useFormatName";
import useFilterColor from "../customHooks/useFilterColor";
import useFormatColorName from "../customHooks/useFormatColorName";
import useFadeIn from "../customHooks/useFadeIn";
import useRandomDelay from "../customHooks/useRandomDelay";
import Card from "./Card";
import styles from "../css/tableRowElement.module.css";

function TableRowElement({ item, colors, themeHandler }) {
  const hoverColor = hoverColors.map((color) => {
    return color;
  });
  const elementSymbol = item.symbol;
  const imageFiltered = elementImages.find(
    (elementImage) => elementImage.name === elementSymbol
  )?.url;
  const { updateOverflow, updateToTop } = useContext(StylesContext).value;
  const [selectedElement, setSelectedElement] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const displayMass = useFormatMass(item.atomicMass);
  const displayName = useTruncateName(item.name);
  const isFaded = useFadeIn(1);
  const randomDelay = useRandomDelay(null);
  const formatedColor = useFormatColorName(item.groupBlock);
  const backgroundColor = useFilterColor(formatedColor, colors);
  const formatedHoverColor = useFormatColorHover(item.groupBlock);
  const backgroundHoverColor = useFilterColor(formatedHoverColor, hoverColor);

  const handleClick = () => {
    setSelectedElement(true);
    updateOverflow();
    updateToTop();
  };

  const handleCLose = () => {
    setSelectedElement(false);
    updateOverflow();
    updateToTop();
  };

  return (
    <>
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${styles.tableRowElement}  ${isFaded ? styles.show : ""}`}
        style={{
          ...(!themeHandler && {
            backgroundColor: `var(${
              isHovered ? backgroundHoverColor : backgroundColor
            })`,
          }),
          ...(themeHandler && {
            backgroundImage: `url(${imageFiltered})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }),
          ...(imageFiltered === undefined && {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(60px)",
          }),
          transitionDelay: `${!isHovered ? randomDelay : ""}`,
        }}
      >
        <div className={`${themeHandler ? styles.elementOverlay : ""}`}></div>
        <span className={styles.atomicNumber}>{item.atomicNumber}</span>
        <span className={styles.symbol}>{item.symbol}</span>
        <span className={styles.name}>{displayName}</span>
        <span className={styles.atomicMass}>{displayMass}</span>
      </button>
      {selectedElement && (
        <Card
          dataFromApi={item}
          onClose={handleCLose}
          backgroundColor={backgroundColor}
          selectedElement={selectedElement}
        />
      )}
    </>
  );
}

export default TableRowElement;
