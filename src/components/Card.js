import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
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
  themePhotoHandler,
  standardState,
}) {
  return (
    <div
      className={`${styles.cardContainer} ${showCard ? styles.cardOpen : ""}`}
      style={{
        ...(showCard && {
          backgroundColor: `${standardState === "gas" ? "#000" : "#fff"}`,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 45%",
          marginBottom: "2rem",
        }),
        ...(themePhotoHandler && backgroundImage === undefined
          ? {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(60px)",
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

function Card({ dataFromApi, backgroundColor, showCard, handleClose }) {
  const elementSymbol = dataFromApi.symbol;
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
        standardState={dataFromApi.standardState}
      >
        <CloseBtn icon={styles.iconBlack} handleClose={handleClose} />
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
