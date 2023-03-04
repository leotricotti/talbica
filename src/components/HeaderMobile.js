import { useState, useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import MainTitle from "./MainTitle";
import ToggleBtn from "./ToggleBtn";
import ToggleMenu from "./ToggleMenu";
import styles from "../css/headerMobile.module.css";

function HeaderMobile({ themeHandler }) {
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
      <ToggleBtn isOpen={isOpen} handleClick={handleClick} />
      <ToggleMenu isOpen={isOpen} themeHandler={themeHandler} />
    </div>
  );
}

export default HeaderMobile;
