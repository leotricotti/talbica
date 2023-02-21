import TableSwitcher from "./TableSwitcher";
import styles from "../css/toggleMenu.module.css";

function ToggleMenu({ isOpen }) {
  return (
    <div
      className={`${
        isOpen ? styles.openToggle : isOpen === null ? "" : styles.closeToggle
      }`}
    >
      {isOpen && (
        <>
          <TableSwitcher />
        </>
      )}
    </div>
  );
}

export default ToggleMenu;
