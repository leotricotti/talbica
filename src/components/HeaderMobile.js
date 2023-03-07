import { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { StylesContext } from "../contexts/StylesContext";
import MainTitle from "./MainTitle";
import HeaderMobileToggleBtn from "./HeaderMobileToggleBtn";
import ModeSwitcher from "./ModeSwitcher";
import styles from "../css/headerMobile.module.css";

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
    clearInput();
    updateOverflow();
  };

  return (
    <div className={styles.headerContainer}>
      <MainTitle title={"Periodic Table. Interactive Chemistry"} />
      <HeaderMobileToggleBtn
        classNameOne={isOpen ? styles.isActiveOne : ""}
        classNameTwo={isOpen ? styles.isActiveTwo : ""}
        classNameThree={isOpen ? styles.isActiveThree : ""}
        handleClick={handleClick}
      />
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
