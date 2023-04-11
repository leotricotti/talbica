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
}) {
  return (
    <div
      className={`${styles.cardPhotoContainer} ${
        showCard ? styles.cardOpen : ""
      }`}
      style={{
        ...(showCard && {
          backgroundColor: "var(--backgroundColorCard)",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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

function CloseBtn({ handleClose }) {
  return (
    <button className={styles.closeBtn} onClick={handleClose}>
      <div className={styles.closeIcon}></div>
    </button>
  );
}

function Card({ dataFromApi, backgroundColor, showCard, handleClose }) {
  const imageFiltered = cardPhotoModeImage.find(
    (elementImage) => elementImage.name === elementSymbol
  )?.url;

  const { cardThemeHandler } = useContext(ThemeContext).value;

  return cardThemeHandler ? (
    <>
      <Overlay handleOverlay={showCard} />
      <CardPhotoContainer backgroundImage={imageFiltered} showCard={showCard}>
        <CloseBtn handleClose={handleClose} />
      </CardPhotoContainer>
    </>
  ) : (
    <>
      <Overlay handleOverlay={showCard} />
      <CardColorContainer backgroundColor={backgroundColor} showCard={showCard}>
        <CloseBtn handleClose={handleClose} />
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
