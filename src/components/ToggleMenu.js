import ModeSwitcher from "./ModeSwitcher";
import styles from "../css/toggleMenu.module.css";

function ToggleMenu({ isOpen }) {
  console.log(isOpen);

  return (
    <div className={`${isOpen ? styles.openToggle : styles.closeToggle}`}>
      {isOpen && (
        <>
          <ModeSwitcher />
        </>
      )}
    </div>
  );
}

export default ToggleMenu;
