import ModeSwitcher from "./ModeSwitcher";
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
          <ModeSwitcher />
        </>
      )}
    </div>
  );
}

export default ToggleMenu;
