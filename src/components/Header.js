import { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { StylesContext } from "../contexts/StylesContext";
import MainTitle from "./MainTitle";
import ModeSwitcher from "./ModeSwitcher";
import styles from "./header.module.css";

function ToggleLine({ isOpen, styleLine, styleActive }) {
  return <span className={`${styleLine} ${isOpen ? styleActive : ""}`} />;
}

function ToggleBtn({ isOpen, handleClick }) {
  return (
    <button className={styles.toggleButton} onClick={handleClick}>
      <ToggleLine
        isOpen={isOpen}
        styleLine={styles.toggleLineOne}
        styleActive={styles.isActiveOne}
      />
      <ToggleLine
        isOpen={isOpen}
        styleLine={styles.toggleLineTwo}
        styleActive={styles.isActiveTwo}
      />
      <ToggleLine
        isOpen={isOpen}
        styleLine={styles.toggleLineThree}
        styleActive={styles.isActiveThree}
      />
    </button>
  );
}

function Header() {
  const { handleThemeChange, themeHandler } = useContext(ThemeContext).value;
  const { updateOverflow, overflow, clearInput } =
    useContext(StylesContext).value;
  const [isOpen, setIsopen] = useState(null);
  const [isActive, setIsActive] = useState(themeHandler ? 2 : 1);

  const handleClickTheme = (id) => {
    handleThemeChange(id);
    setIsActive(id);
  };

  const handleClick = () => {
    setIsopen(!isOpen);
    if (overflow) {
      updateOverflow(false);
    } else {
      updateOverflow(true);
    }
    clearInput();
  };

  return (
    <div
      className={`${styles.headerContainer} ${
        isOpen ? styles.modeSwitcherVisible : ""
      }`}
    >
      <MainTitle title={"Periodic Table. Interactive Chemistry"} />
      <ToggleBtn isOpen={isOpen} handleClick={handleClick} />
      <ModeSwitcher
        handleClickTheme={handleClickTheme}
        isActive={isActive}
        themeHandler={themeHandler}
        isOpen={isOpen}
      />
    </div>
  );
}

export default Header;
