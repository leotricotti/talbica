import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import tableLegendData from "../assets/data/tableLegendData";
import tableSwitcherData from "../assets/data/tableSwitcherData";
import TableLegend from "./TableLegend";
import MobileFooter from "./MobileFooter";
import styles from "../css/modeSwitcher.module.css";

function ModeSwitcher() {
  const { handleThemeChange } = useContext(ThemeContext).value;
  const [isActive, setIsActive] = useState(tableSwitcherData[0].id);

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
      <TableLegend items={tableLegendData} />
      <MobileFooter developer={"Coded and developed by Leonardo Tricotti"} />
    </>
  );
}

export default ModeSwitcher;
