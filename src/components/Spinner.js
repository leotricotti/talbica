import styles from "../css/spinner.module.css";

function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.ldsDualRing}></div>
    </div>
  );
}

export default Spinner;
