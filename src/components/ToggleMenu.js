import { useEffect, useState } from "react";
import TableSwitcher from "./TableSwitcher";
import TableActions from "./TableActions";
import styles from "../css/toggleMenu.module.css";

function ToggleMenu({ isOpen }) {
  const [openMenu, setOpenMenu] = useState(null);

  // useEffect(() => {
  //   document.body.style.overflow = openMenu ? "hidden" : "auto";
  // }, [openMenu]);

  useEffect(() => {
    handleMenu(isOpen);
  }, [isOpen]);

  const handleMenu = (menu) => {
    setOpenMenu(menu);
  };

  return (
    <div className={`${openMenu ? styles.openToggle : styles.closeToggle}`}>
      {openMenu && (
        <>
          <TableSwitcher />
          <TableActions title={"Heatmaps"} />
        </>
      )}
    </div>
  );
}

export default ToggleMenu;
