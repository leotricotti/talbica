import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "./cardModeSwitcher.module.css";

function CardModeSwitcher({ showCard }) {
  const { handleCardThemeChange } = useContext(ThemeContext).value;
  const [mode, setMode] = useState("info");

  const handleClick = (newMode) => {
    setMode(newMode);
    handleCardThemeChange(newMode);
  };

  return (
    <div
      className={`${styles.modeSwitcherContainer} ${
        showCard ? styles.modeSwitcherContainerActve : ""
      }`}
    >
      <div
        className={`${styles.modeSwitcherActive} ${
          mode === "info" ? styles.infoActive : styles.photoActive
        }`}
      ></div>
      <button
        className={`${styles.modeSwitcherInfo} ${
          mode === "info" ? styles.infoModeActive : ""
        }`}
        onClick={() => handleClick("info")}
      >
        Info
      </button>
      <button
        className={`${styles.modeSwitcherPhoto} ${
          mode === "photo" ? styles.photoModeActive : ""
        }`}
        onClick={() => handleClick("photo")}
      >
        Photo
      </button>
    </div>
  );
}

export default CardModeSwitcher;
