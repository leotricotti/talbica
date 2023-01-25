import { useState } from "react";
import colorIcon from "../assets/images/icons/icon-palette.png";
import photoIcon from "../assets/images/icons/icon-ruby.png";
import TableSwitcher from "./TableSwitcher";
import TableActions from "./TableActions";
import styles from "../css/toggleMenu.module.css";

function ToggleMenu() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className={styles.tableSwitcherContainer}>
      <TableSwitcher
        icon={colorIcon}
        title={"Colors"}
        handleClick={() => handleClick("firstButton")}
        className={`${styles.tableSwitcherFirstChild} ${
          activeButton === "firstButton" ? styles.isActive : ""
        }`}
      />
      <TableSwitcher
        icon={photoIcon}
        title={"Photos"}
        handleClick={() => handleClick("secondButton")}
        className={`${styles.tableSwitcherSecondChild} ${
          activeButton === "secondButton" ? styles.isActive : ""
        }`}
      />
      <TableActions />
    </div>
  );
}

export default ToggleMenu;
