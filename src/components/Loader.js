import styles from "../css/loader.module.css";

function Loader() {
  return (
    <div className={styles.loaderElementContainer}>
      <div className={styles.bromineContainer}>
        <span className={styles.atomicNumber}>35</span>
        <span className={styles.symbol}>Br</span>
        <span className={styles.name}>Bromine</span>
        <span className={styles.atomicMass}>79.904</span>
      </div>
      <div className={styles.bariumContainer}>
        <span className={styles.atomicNumber}>56</span>
        <span className={styles.symbol}>Ba</span>
        <span className={styles.name}>Barium</span>
        <span className={styles.atomicMass}>137.327</span>
      </div>
    </div>
  );
}

export default Loader;
