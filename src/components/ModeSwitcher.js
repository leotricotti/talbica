import tableLegendData from "../assets/data/tableLegendData";
import tableSwitcherData from "../assets/data/tableSwitcherData";
<<<<<<< HEAD
import ModeSwitcherTableLegend from "./ModeSwitcherTableLegend";
=======
import ElementTypes from "./ElementTypes";
>>>>>>> branch
import styles from "../css/modeSwitcher.module.css";

function ModeSwitcher({ themeHandler, isActive, handleClickTheme }) {
  return (
    <>
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
<<<<<<< HEAD
      <ModeSwitcherTableLegend
        items={tableLegendData}
        themeHandler={themeHandler}
      />
=======
      <ElementTypes items={tableLegendData} themeHandler={themeHandler} />
>>>>>>> branch
    </>
  );
}

export default ModeSwitcher;
