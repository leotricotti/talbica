import tableLegendData from "../assets/data/tableLegendData";
import tableSwitcherData from "../assets/data/tableSwitcherData";
import ElementTypes from "./ElementTypes";
import styles from "./modeSwitcher.module.css";

function Switcher({ isActive, handleClickTheme }) {
  return (
    <div className={styles.modeSwitcherContainer}>
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

function ModeSwitcher({ themeHandler, isActive, handleClickTheme }) {
  return (
    <>
      <Switcher isActive={isActive} handleClickTheme={handleClickTheme} />
      <ElementTypes items={tableLegendData} themeHandler={themeHandler} />
    </>
  );
}

export default ModeSwitcher;
