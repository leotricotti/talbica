import { useEffect, useState } from "react";
import TableSwitcher from "./TableSwitcher";
import TableActions from "./TableActions";
import styles from "../css/toggleMenu.module.css";

function ToggleMenu({ isOpen }) {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setOpenMenu(true);
    document.body.style.overflow = openMenu ? "hidden" : "auto";
  }, [isOpen, openMenu]);

  return (
    <div className={`${openMenu ? styles.openToggle : ""}`}>
      <TableSwitcher />
      <TableActions title={"Heatmaps"} />
    </div>
  );
}

export default ToggleMenu;
