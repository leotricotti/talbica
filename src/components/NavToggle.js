import styles from "../css/navToggle.module.css";

function NavToggle() {
  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleLine}></div>
    </div>
  );
}

export default NavToggle;
