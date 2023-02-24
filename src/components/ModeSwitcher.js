import { useState, useContext } from "react";
import { PhotoModeContext } from "../contexts/PhotoModeContext";
import tableSwitcherData from "../assets/data/tableSwitcherData";
import styles from "../css/tableSwitcher.module.css";

function ModeSwitcher() {
  const { handlePhotoMode } = useContext(PhotoModeContext).value;
  const [activated, setActivated] = useState(tableSwitcherData[0].id);

  const handleClick = (id) => {
    setActivated(id);
    handlePhotoMode(id);
  };

  return (
    <div className={styles.tableSwitcherContainer}>
      {tableSwitcherData.map((item) => (
        <button
          key={item.id}
          className={` ${styles.tableSwitcher} ${
            item.id === activated ? styles.isActive : ""
          }`}
          onClick={() => handleClick(item.id)}
        >
          <div>
            <img
              src={item.url}
              alt="Switcher button"
              className={styles.tableSwitcherIcon}
            />
            <p className={styles.tableSwitcherMenuTitle}>{item.name}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default ModeSwitcher;
