import { useEffect, useState } from "react";
import TableSwitcher from "./TableSwitcher";
import styles from "../css/toggleMenu.module.css";

function ToggleMenu({ isOpen }) {
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    handleMenu(isOpen);
  }, [isOpen]);

  const handleMenu = (menu) => {
    setOpenMenu(menu);
  };

  return (
    <div
      className={`${styles.menuContainer} ${openMenu ? styles.openToggle : ""}`}
    >
      {openMenu && (
        <>
          <TableSwitcher />
        </>
      )}
    </div>
  );
}

export default ToggleMenu;
