import { useState } from "react";
import styles from "../css/navToggle.module.css";

function NavToggle() {
  const [isOpen, setIsopen] = useState(false);

  function handleClick() {
    setIsopen(!isOpen);
  }

  return (
    <div className={styles.mobileToggleButton}>
      <button className={styles.toggleButton} onClick={handleClick}>
        <span className={styles.toggleContainer}>
          <span
            className={`${styles.toggleLineOne} ${
              isOpen ? styles.isActive : ""
            }`}
          ></span>
          <span
            className={`${styles.toggleLineTwo} ${
              isOpen ? styles.isActive : ""
            }`}
          ></span>
          <span
            className={`${styles.toggleLineThree} ${
              isOpen ? styles.isActive : ""
            }`}
          ></span>
        </span>
      </button>
    </div>
  );
}

export default NavToggle;
