import { useState, useContext, useEffect } from "react";
import { StylesContext } from "../contexts/StylesContext";
import { hoverColors } from "../assets/data/tableColors";
import elementImages from "../assets/data/elementImages";
import useFormatColorHover from "../customHooks/useFormatColorHover";
import useFormatMass from "../customHooks/useFormatMass";
import useTruncateName from "../customHooks/useFormatName";
import useFilterColor from "../customHooks/useFilterColor";
import useFormatColorName from "../customHooks/useFormatColorName";
import useRandomDelay from "../customHooks/useRandomDelay";
import Card from "./Card";
import CardModeSwitcher from "./CardModeSwitcher";
import styles from "./tableRowElement.module.css";

function TableRowElement({ item, colors, themeHandler }) {
  const hoverColor = hoverColors.map((color) => {
    return color;
  });
  const standardState = item.standardState;
  const elementSymbol = item.symbol;
  const imageFiltered = elementImages.find(
    (elementImage) => elementImage.name === elementSymbol
  )?.url;

  const { updateOverflow, clearInput } = useContext(StylesContext).value;
  const [isHovered, setIsHovered] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [isFadedIn, setIsFadeIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsFadeIn(false);
    }, 2500);
  });

  const displayMass = useFormatMass(item.atomicMass);
  const displayName = useTruncateName(item.name);
  const randomDelay = useRandomDelay(null);
  const formatedColor = useFormatColorName(item.groupBlock);
  const backgroundColor = useFilterColor(formatedColor, colors);
  const formatedHoverColor = useFormatColorHover(item.groupBlock);
  const backgroundHoverColor = useFilterColor(formatedHoverColor, hoverColor);

  const handleClick = () => {
    updateOverflow(true);
    setShowCard(true);
  };

  const handleClose = () => {
    updateOverflow(false);
    setShowCard(false);
    clearInput();
  };

  console.log(isFadedIn);

  return (
    <>
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={styles.tableRowElement}
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
          ...(themeHandler && imageFiltered === undefined
            ? {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(60px)",
              }
            : {}),
          transitionDelay: `${isFadedIn ? randomDelay : ""}`,
        }}
      >
        <span className={styles.atomicNumber}>{item.atomicNumber}</span>
        <span className={styles.symbol}>{item.symbol}</span>
        <span className={styles.name}>{displayName}</span>
        <span className={styles.atomicMass}>{displayMass}</span>
      </button>
      <Card
        showCard={showCard}
        handleClose={handleClose}
        dataFromApi={item}
        backgroundColor={backgroundColor}
      />
      <CardModeSwitcher showCard={showCard} standardState={standardState} />
    </>
  );
}

export default TableRowElement;
