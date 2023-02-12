import styles from "../css/modeSwitcherMobile.module.css";

function ModeSwitcherMobile() {
  return (
    <div className={styles.modeSwitcherContainer}>
      <button className={styles.modeSwitcherInfo}>Info</button>
      <button className={styles.modeSwitcherPhoto}>Photo</button>
    </div>
  );
}

export default ModeSwitcherMobile;
