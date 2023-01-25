import styles from "../css/navToggle.module.css";

function NavToggle() {
  return (
    <div className={styles.mobileToggleButton}>
      <button className={styles.toggleButton}>
        <span className={styles.toggleContainer}>
          <span className={styles.toggleLineOne + styles.isActive}></span>
          <span className={styles.toggleLineTwo + styles.isActive}></span>
          <span className={styles.toggleLineThree + styles.isActive}></span>
        </span>
      </button>
    </div>
  );
}

export default NavToggle;
