import { useState, useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import MainTitle from "./MainTitle";
import ToggleBtn from "./ToggleBtn";
import ModeSwitcher from "./ModeSwitcher";
import styles from "../css/headerMobile.module.css";

function HeaderMobile() {
  const { updateOverflow, clearInput } = useContext(StylesContext).value;
  const [isOpen, setIsopen] = useState(null);

  const handleClick = () => {
    setIsopen(!isOpen);
    clearInput();
    updateOverflow();
  };

  return (
    <div className={styles.headerContainer}>
      <MainTitle title={"Periodic Table. Interactive Chemistry"} />
      <ToggleBtn
        classNameOne={isOpen ? styles.isActiveOne : ""}
        classNameTwo={isOpen ? styles.isActiveTwo : ""}
        classNameThree={isOpen ? styles.isActiveThree : ""}
        handleClick={handleClick}
      />
      <div className={`${isOpen ? styles.openToggle : styles.closeToggle}`}>
        {isOpen && <ModeSwitcher />}
      </div>
    </div>
  );
}

export default HeaderMobile;
