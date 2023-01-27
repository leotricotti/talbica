import styles from "../css/navToggle.module.css";

function NavToggle({
  classNameOne,
  classNameTwo,
  classNameThree,
  handleClick,
}) {
  return (
    <div className={styles.mobileToggleButton}>
      <button className={styles.toggleButton} onClick={handleClick}>
        <span className={styles.toggleContainer}>
          <span className={`${styles.toggleLineOne} ${classNameOne}`}></span>
          <span className={`${styles.toggleLineTwo} ${classNameTwo}`}></span>
          <span
            className={`${styles.toggleLineThree} ${classNameThree}`}
          ></span>
        </span>
      </button>
    </div>
  );
}

export default NavToggle;
