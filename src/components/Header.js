import MainTitle from "./MainTitle";
import NavToggle from "./NavToggle";
import styles from "../css/header.module.css";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <MainTitle title={"Periodic Table. Interactive Chemistry"} />
      <NavToggle />
    </header>
  );
}

export default Header;
