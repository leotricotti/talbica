import { useState } from "react";
import colorIcon from "../assets/images/icons/icon-palette.png";
import photoIcon from "../assets/images/icons/icon-ruby.png";
import TableSwitcher from "./TableSwitcher";
import TableActions from "./TableActions";
import styles from "../css/toggleMenu.module.css";

function ToggleMenu() {
  const [activeButtonSwitcher, setActiveButtonSwitcher] = useState(null);

  const handleClickSwitcher = (buttonName) => {
    setActiveButtonSwitcher(buttonName);
  };

  return (
    <>
      <div className={styles.tableSwitcherContainer}>
        <TableSwitcher
          icon={colorIcon}
          title={"Colors"}
          handleClickSwitcher={() => handleClickSwitcher("firstButton")}
          className={`${styles.tableSwitcherFirstChild} ${
            activeButtonSwitcher === "firstButton" ? styles.isActive : ""
          }`}
        />
        <TableSwitcher
          icon={photoIcon}
          title={"Photos"}
          handleClickSwitcher={() => handleClickSwitcher("secondButton")}
          className={`${styles.tableSwitcherSecondChild} ${
            activeButtonSwitcher === "secondButton" ? styles.isActive : ""
          }`}
        />
      </div>
      <TableActions title={"Heatmaps"} />
    </>
  );
}

export default ToggleMenu;
