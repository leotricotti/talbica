import styles from "../css/loader.module.css";

function Loader() {
  return (
    <div className={styles.loaderElementContainer}>
      <div className={` ${styles.element} ${styles.bromineElement}`}>
        <span className={styles.atomicNumberBromine}>35</span>
        <span className={styles.symbolBromine}>Br</span>
        <span className={styles.nameBromine}>Bromine</span>
        <span className={styles.atomicMassBromine}>79.904</span>
      </div>
      <div className={`${styles.element} ${styles.bariumElement} `}>
        <span className={styles.atomicNumberBarium}>56</span>
        <span className={styles.symbolBarium}>Ba</span>
        <span className={styles.nameBarium}>Barium</span>
        <span className={styles.atomicMassBarium}>137.327</span>
      </div>
    </div>
  );
}

export default Loader;
