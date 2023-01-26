import { useState } from "react";
import colorIcon from "../assets/images/icons/icon-palette.png";
import photoIcon from "../assets/images/icons/icon-ruby.png";
import TableSwitcher from "./TableSwitcher";
import TableActions from "./TableActions";
import styles from "../css/toggleMenu.module.css";

function ToggleMenu() {
  const [activeButtonSwitcher, setActiveButtonSwitcher] = useState(null);
  const [activeButtonActions, setActiveButtonActions] = useState(false);

  const handleClickSwitcher = (button) => {
    setActiveButtonSwitcher(button);
  };

  const handleClickActions = (id) => {
    setActiveButtonActions(id);
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
          handleClick={() => handleClickSwitcher("secondButton")}
          className={`${styles.tableSwitcherSecondChild} ${
            activeButtonSwitcher === "secondButton" ? styles.isActive : ""
          }`}
        />
      </div>
      <TableActions
        title={"Heatmaps"}
        handleClickActions={handleClickActions}
        className={`${styles.tableActionButtons} ${
          activeButtonActions === id ? styles.isActive : ""
        }`}
      />
    </>
  );
}

export default ToggleMenu;
