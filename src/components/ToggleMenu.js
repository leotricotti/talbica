import ModeSwitcher from "./ModeSwitcher";
import styles from "../css/toggleMenu.module.css";

function ToggleMenu({ isOpen, themeHandler }) {
  return (
    <div className={`${isOpen ? styles.openToggle : styles.closeToggle}`}>
      {isOpen && (
        <>
          <ModeSwitcher themeHandler={themeHandler} />
        </>
      )}
    </div>
  );
}

export default ToggleMenu;
