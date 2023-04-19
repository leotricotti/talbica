import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import useFormatMass from "../customHooks/useFormatMass";
import cardPhotoModeImage from "../assets/data/cardPhotoModeImage";
import Overlay from "./Overlay";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import styles from "./card.module.css";

function CardColorContainer({ children, backgroundColor, showCard }) {
  return (
    <div
      className={`${styles.cardContainer} ${showCard ? styles.cardOpen : ""}`}
      style={{
        backgroundColor: `var(${backgroundColor})`,
      }}
    >
      {children}
    </div>
  );
}

function CardPhotoContainer({
  children,
  backgroundImage,
  showCard,
  standardState,
  elementSymbol,
}) {
  return (
    <div
      className={`${
        backgroundImage === undefined
          ? styles.elementCentered
          : styles.cardContainer
      } ${showCard ? styles.cardOpen : ""}`}
      style={{
        ...(showCard && {
          backgroundColor: `${
            elementSymbol === "N" || elementSymbol === "F"
              ? "#bde1ed"
              : elementSymbol === "Tc"
              ? "#e8e9eb"
              : elementSymbol === "I"
              ? "#aeae9bfa"
              : standardState === "gas" ||
                elementSymbol === "Na" ||
                elementSymbol === "Rh"
              ? "#000"
              : "#fff"
          }`,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 45%",
          marginBottom: "2rem",
        }),
        ...(showCard && backgroundImage === undefined
          ? {
              backgroundColor: "rgba(0, 0, 0, .8)",
              backdropFilter: "blur(15px)",
            }
          : {}),
      }}
    >
      {children}
    </div>
  );
}

function CloseBtn({ icon, handleClose }) {
  return (
    <button className={styles.closeBtn} onClick={handleClose}>
      <div className={icon}></div>
    </button>
  );
}

function Element({ item, displayMass, backgroundImage }) {
  const standardState = item.standardState;
  const symbol = item.symbol;
  return (
    <div
      className={`${styles.elementContainer} ${
        standardState === "gas" ||
        symbol === "I" ||
        symbol === "Na" ||
        symbol === "Rh" ||
        backgroundImage === undefined
          ? styles.photoModeActive
          : ""
      }`}
      style={{
        left: `${backgroundImage === undefined ? "0" : "1rem"}`,
        backgroundColor: `${
          symbol === "N" || symbol === "F"
            ? "#bde1ed"
            : symbol === "Tc"
            ? "#e8e9eb"
            : symbol === "I"
            ? "#aeae9bfa"
            : backgroundImage === undefined
            ? "rgba(0, 0, 0, .8)"
            : standardState === "gas" || symbol === "Na" || symbol === "Rh"
            ? "#000"
            : "#fff"
        }`,
        backdropFilter: `${backgroundImage === undefined ? "blur(15px)" : ""}`,
      }}
    >
      <span className={styles.atomicNumber}>{item.atomicNumber}</span>
      <span className={styles.symbol}>{item.symbol}</span>
      <span className={styles.name}>{item.name}</span>
      <span className={styles.atomicMass}>{displayMass}</span>
    </div>
  );
}

function Card({ dataFromApi, backgroundColor, showCard, handleClose }) {
  const standardState = dataFromApi.standardState;
  const elementSymbol = dataFromApi.symbol;
  const displayMass = useFormatMass(dataFromApi.atomicMass);
  const imageFiltered = cardPhotoModeImage.find(
    (elementImage) => elementImage.name === elementSymbol
  )?.url;

  const { cardThemeHandler } = useContext(ThemeContext).value;

  return cardThemeHandler ? (
    <>
      <Overlay handleOverlay={showCard} />
      <CardPhotoContainer
        backgroundImage={imageFiltered}
        showCard={showCard}
        standardState={standardState}
        elementSymbol={elementSymbol}
      >
        <CloseBtn
          icon={`${
            standardState === "gas" ||
            imageFiltered === undefined ||
            elementSymbol === "Na" ||
            elementSymbol === "Rh"
              ? styles.iconWhite
              : styles.iconBlack
          }`}
          handleClose={handleClose}
        />
        <Element
          item={dataFromApi}
          displayMass={displayMass}
          backgroundImage={imageFiltered}
        />
      </CardPhotoContainer>
    </>
  ) : (
    <>
      <Overlay handleOverlay={showCard} />
      <CardColorContainer backgroundColor={backgroundColor} showCard={showCard}>
        <CloseBtn icon={styles.iconWhite} handleClose={handleClose} />
        <CardHeader
          dataFromApi={dataFromApi}
          backgroundColor={backgroundColor}
        />
        <CardBody dataFromApi={dataFromApi} />
      </CardColorContainer>
    </>
  );
}

export default Card;
