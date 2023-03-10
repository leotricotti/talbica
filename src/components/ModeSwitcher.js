import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import tableLegendData from "../assets/data/tableLegendData";
import tableSwitcherData from "../assets/data/tableSwitcherData";
import ElementTypes from "./ElementTypes";
import styles from "../css/modeSwitcher.module.css";

function ModeSwitcher({ themeHandler }) {
  const { handleThemeChange } = useContext(ThemeContext).value;
  const [isActive, setIsActive] = useState(themeHandler ? 2 : 1);

  const handleClick = (id) => {
    handleThemeChange(id);
    setIsActive(id);
  };

  return (
    <>
      <div className={styles.modeSwitcherContainer}>
        {tableSwitcherData.map((item) => (
          <button
            key={item.id}
            className={`${styles.modeSwitcher} ${
              isActive === item.id ? styles.modeSwitcherActive : ""
            }`}
            onClick={() => handleClick(item.id)}
          >
            <div>
              <img
                src={item.url}
                alt="Switcher button"
                className={styles.modeSwitcherIcon}
              />
              <p className={styles.modeSwitcherMenuTitle}>{item.name}</p>
            </div>
          </button>
        ))}
      </div>
      <ElementTypes items={tableLegendData} themeHandler={themeHandler} />
    </>
  );
}

export default ModeSwitcher;
