import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "./cardModeSwitcher.module.css";

function CardModeSwitcher({ showCard, standardState }) {
  const { cardThemeHandler, handleCardThemeChange } =
    useContext(ThemeContext).value;

  const handleClick = () => {
    handleCardThemeChange();
  };

  return (
    <div
      className={`${styles.modeSwitcherContainer} ${
        showCard ? styles.modeSwitcherContainerActve : ""
      }`}
    >
      <div
        className={`${styles.modeSwitcherActive} ${
          cardThemeHandler ? styles.photoActive : styles.infoActive
        }`}
      ></div>
      <button
        className={`${styles.modeSwitcherInfo} ${
          cardThemeHandler ? "" : styles.infoModeActive
        }`}
        onClick={() => handleClick("info")}
      >
        Info
      </button>
      <button
        className={`${styles.modeSwitcherPhoto} ${
          cardThemeHandler ? styles.photoModeActive : ""
        }`}
        onClick={() => handleClick("photo")}
      >
        Photo
      </button>
    </div>
  );
}

export default CardModeSwitcher;
