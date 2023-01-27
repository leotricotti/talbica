import { useState } from "react";
import MainTitle from "./MainTitle";
import NavToggle from "./NavToggle";
import ToggleMenu from "./ToggleMenu";
import styles from "../css/header.module.css";

function Header() {
  const [isOpen, setIsopen] = useState(false);

  function handleClick() {
    setIsopen(!isOpen);
  }

  return (
    <header className={styles.headerContainer}>
      <MainTitle title={"Periodic Table. Interactive Chemistry"} />
      <NavToggle
        classNameOne={isOpen ? styles.isActiveOne : ""}
        classNameTwo={isOpen ? styles.isActiveTwo : ""}
        classNameThree={isOpen ? styles.isActiveThree : ""}
        handleClick={handleClick}
      />
      {isOpen && <ToggleMenu />}
    </header>
  );
}

export default Header;
