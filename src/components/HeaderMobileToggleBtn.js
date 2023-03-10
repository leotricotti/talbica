import styles from "../css/toggleBtn.module.css";

<<<<<<< HEAD:src/components/HeaderMobileToggleBtn.js
function HeaderMobileToggleBtn({
  classNameOne,
  classNameTwo,
  classNameThree,
  handleClick,
}) {
=======
function ToggleBtn({ isOpen, handleClick }) {
>>>>>>> branch:src/components/ToggleBtn.js
  return (
    <div className={styles.mobileToggleButton}>
      <button className={styles.toggleButton} onClick={handleClick}>
        <span className={styles.toggleContainer}>
          <span
            className={`${styles.toggleLineOne} ${
              isOpen ? styles.isActiveOne : ""
            }`}
          ></span>
          <span
            className={`${styles.toggleLineTwo} ${
              isOpen ? styles.isActiveTwo : ""
            }`}
          ></span>
          <span
            className={`${styles.toggleLineThree} ${
              isOpen ? styles.isActiveThree : ""
            }`}
          ></span>
        </span>
      </button>
    </div>
  );
}

export default HeaderMobileToggleBtn;
