import React, { useState } from "react";
import styles from "../css/modeSwitcherMobile.module.css";

function ModeSwitcherMobile() {
  const [mode, setMode] = useState("info");

  const handleClick = (newMode) => {
    setMode(newMode);
  };

  return (
    <div className={styles.modeSwitcherContainer}>
      <div
        className={`${styles.modeSwitcherActive} ${
          mode === "info" ? styles.infoActive : styles.photoActive
        }`}
      ></div>
      <button
        className={styles.modeSwitcherInfo}
        onClick={() => handleClick("info")}
      >
        Info
      </button>
      <button
        className={styles.modeSwitcherPhoto}
        onClick={() => handleClick("photo")}
      >
        Photo
      </button>
    </div>
  );
}

export default ModeSwitcherMobile;
