import styles from "../css/cardBody.module.css";

function CardBody({ dataFromApi }) {
  const item = dataFromApi;

  return (
    <div key={item.atomicNumber} className={styles.carBodyContainer}>
      <h3 className={styles.cardBodyTitle}>Summary</h3>
      <div className={styles.propertyItems}>
        <span className={styles.propertyTitle}>{item.symbol}</span>
        <span className={styles.propertyValue}>{item.symbol}</span>
      </div>
      <div className={styles.propertyItems}>
        <span className={styles.propertyTitle}>{item.name}</span>
        <span className={styles.propertyValue}>{item.name}</span>
      </div>
      <div className={styles.propertyItems}>
        <span className={styles.propertyTitle}>Chemical category</span>
        <span className={styles.propertyValue}>{item.groupBlock}</span>
      </div>
      <div className={styles.propertyItems}>
        <span className={styles.propertyTitle}>Atomic weight</span>
        <span className={styles.propertyValue}>{item.atomicWeight}</span>
      </div>
      <div className={styles.propertyItems}>
        <span className={styles.propertyTitle}>Atomic mass</span>
        <span className={styles.propertySymbol}>
          M <sub>a</sub>
        </span>
        <span className={styles.propertyValue}>{item.atomicWeight}</span>
      </div>
    </div>
  );
}

export default CardBody;
