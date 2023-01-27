import { useState } from "react";
import MainTitle from "./MainTitle";
import ToggleBtn from "./ToggleBtn";
import ToggleMenu from "./ToggleMenu";
import styles from "../css/headerMobile.module.css";

function HeaderMobile() {
  const [isOpen, setIsopen] = useState(false);

  function handleClick() {
    setIsopen(!isOpen);
  }

  return (
    <header className={styles.headerContainer}>
      <MainTitle title={"Periodic Table. Interactive Chemistry"} />
      <ToggleBtn
        classNameOne={isOpen ? styles.isActiveOne : ""}
        classNameTwo={isOpen ? styles.isActiveTwo : ""}
        classNameThree={isOpen ? styles.isActiveThree : ""}
        handleClick={handleClick}
      />
      {isOpen && <ToggleMenu />}
    </header>
  );
}

export default HeaderMobile;
