import styles from "../css/modeSwitcherMobile.module.css";

function ModeSwitcherMobile() {
  return (
    <div className={styles.modeSwitcherContainer}>
      <div className={`${styles.modeSwitcherInfo} ${styles.active}`}>Info</div>
      <div className={styles.modeSwitcherPhoto}>Photo</div>
    </div>
  );
}

export default ModeSwitcherMobile;
