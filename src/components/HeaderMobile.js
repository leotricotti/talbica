import { useState, useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import MainTitle from "./MainTitle";
import ToggleBtn from "./ToggleBtn";
import ToggleMenu from "./ToggleMenu";
import SearchBar from "./SearchBar";
import styles from "../css/headerMobile.module.css";

function HeaderMobile({ themeHandler, dataFromApi }) {
  const { updateOverflow, clearInput } = useContext(StylesContext).value;
  const [isOpen, setIsopen] = useState(false);

  const handleClick = () => {
    setIsopen(!isOpen);
    updateOverflow();
    clearInput();
  };

  return (
    <div className={styles.headerContainer}>
      <MainTitle title={"Periodic Table. Interactive Chemistry"} />
      <ToggleBtn isOpen={isOpen} handleClick={handleClick} />
      <ToggleMenu isOpen={isOpen} themeHandler={themeHandler} />
      <SearchBar dataFromApi={dataFromApi} />
    </div>
  );
}

export default HeaderMobile;
