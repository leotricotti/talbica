import { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { StylesContext } from "../contexts/StylesContext";
import MainTitle from "./MainTitle";
import ModeSwitcher from "./ModeSwitcher";
import styles from "../css/headerMobile.module.css";

function ToggleLine({ isOpen, styleLine, styleActive }) {
  return <span className={`${styleLine} ${isOpen ? { styleActive } : ""}`} />;
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

function HeaderMobile() {
  const { handleThemeChange, themeHandler } = useContext(ThemeContext).value;
  const { updateOverflow, clearInput } = useContext(StylesContext).value;
  const [isOpen, setIsopen] = useState(null);
  const [isActive, setIsActive] = useState(themeHandler ? 2 : 1);

  const handleClickTheme = (id) => {
    handleThemeChange(id);
    setIsActive(id);
  };

  const handleClick = () => {
    setIsopen(!isOpen);
    updateOverflow();
    clearInput();
  };

  return (
    <div className={styles.headerContainer}>
      <MainTitle title={"Periodic Table. Interactive Chemistry"} />
      <ToggleBtn isOpen={isOpen} handleClick={handleClick} />
      <div className={`${isOpen ? styles.openToggle : styles.closeToggle}`}>
        {isOpen && (
          <ModeSwitcher
            handleClickTheme={handleClickTheme}
            isActive={isActive}
            themeHandler={themeHandler}
          />
        )}
      </div>
    </div>
  );
}

export default HeaderMobile;
