import tableLegendData from "../assets/data/tableLegendData";
import tableSwitcherData from "../assets/data/tableSwitcherData";
import ElementTypes from "./ElementTypes";
import styles from "./modeSwitcher.module.css";

function Switcher({ isActive, handleClickTheme }) {
  return (
    <div className={styles.switcherContainer}>
      {tableSwitcherData.map((item) => (
        <button
          key={item.id}
          className={`${styles.modeSwitcher} ${
            isActive === item.id ? styles.modeSwitcherActive : ""
          }`}
          onClick={() => handleClickTheme(item.id)}
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
  );
}

function ModeSwitcher({ themeHandler, isOpen, isActive, handleClickTheme }) {
  return (
    <div
      className={`${styles.modeSwitcherContainer} ${
        isOpen ? styles.modeSwitcherVisible : ""
      }`}
    >
      <Switcher isActive={isActive} handleClickTheme={handleClickTheme} />
      <ElementTypes items={tableLegendData} themeHandler={themeHandler} />
    </div>
  );
}

export default ModeSwitcher;
