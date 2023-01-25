import { useState } from "react";
import styles from "../css/navToggle.module.css";

function NavToggle() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.mobileToggleButton}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <span className={styles.toggleContainer}>
            <span className={styles.toggleLineOne + "isActive"}></span>
            <span className={styles.toggleLineTwo + "isActive"}></span>
            <span className={styles.toggleLineThree + "isActive"}></span>
          </span>
        ) : (
          <span className={styles.toggleContainer}>
            <span className={styles.toggleLine}></span>
          </span>
        )}
      </button>
    </div>
  );
}

export default NavToggle;
