import { useContext } from "react";
import { PhotoModeContext } from "../contexts/PhotoModeContext";
import tableSwitcherData from "../assets/data/tableSwitcherData";
import styles from "../css/modeSwitcher.module.css";

function ModeSwitcher() {
  const { handlePhotoMode, photoMode } = useContext(PhotoModeContext).value;

  const handleClick = (id) => {
    handlePhotoMode(id);
  };

  return (
    <div className={styles.modeSwitcherContainer}>
      {tableSwitcherData.map((item) => (
        <button
          key={item.id}
          className={` ${styles.modeSwitcher} ${
            !photoMode ? styles.isActiveColorMode : styles.isActivePhotoMode
          }`}
          onClick={() => handleClick(item.id)}
        >
          <div>
            <img
              src={item.url}
              alt="Switcher button"
              className={styles.modeSwitcherIcon}
            />
            <p
              className={`${styles.modeSwitcherMenuTitle} ${
                photoMode ? styles.photoModeMenuTitle : ""
              }`}
            >
              {item.name}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default ModeSwitcher;
