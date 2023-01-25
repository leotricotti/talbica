import MainTitle from "./MainTitle";
import NavToggle from "./NavToggle";
import ToggleMenu from "./ToggleMenu";
import styles from "../css/header.module.css";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <MainTitle title={"Periodic Table. Interactive Chemistry"} />
      <NavToggle />
      <ToggleMenu />
    </header>
  );
}

export default Header;
