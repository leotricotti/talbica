import styles from "../css/cardBody.module.css";

function CardBody({ dataFromApi }) {
  const item = dataFromApi;

  const capitalizeChemicalCategory = item.groupBlock.replace(
    /(^\w{1})|(\s+\w{1})/g,
    (letter) => letter.toUpperCase()
  );

  return (
    <div key={item.atomicNumber} className={styles.carBodyContainer}>
      <h3 className={styles.cardBodyTitle}>Summary</h3>
      <div className={styles.propertyItems}>
        <span className={styles.propertyTitle}>Symbol</span>
        <span className={styles.propertyValue}>{item.symbol}</span>
      </div>
      <div className={styles.propertyItems}>
        <span className={styles.propertyTitle}>Name</span>
        <span className={styles.propertyValue}>{item.name}</span>
      </div>
      <div className={styles.propertyItems}>
        <span className={styles.propertyTitle}>Chemical category</span>
        <span className={styles.propertyValue}>
          {capitalizeChemicalCategory}
        </span>
      </div>
      <div className={styles.propertyItems}>
        <span className={styles.propertyTitle}>Atomic number</span>
        <span className={styles.propertySymbol}>Z</span>
        <span className={styles.propertyValue}>{item.atomicNumber}</span>
      </div>
      <div className={styles.propertyItems}>
        <span className={styles.propertyTitle}>Boiling point</span>
        <span className={styles.propertyValue}>{item.boilingPoint}</span>
        <span className={styles.propertySymbol}>F °</span>
      </div>
      <div className={styles.propertyItems}>
        <span className={styles.propertyTitle}>Period</span>
        <span className={styles.propertyValue}>{item.period}</span>
      </div>
      <div className={styles.propertyItems}>
        <span className={styles.propertyTitle}>Group</span>
        <span className={styles.propertyValue}>{item.group}</span>
      </div>
      <div className={styles.propertyItems}>
        <span className={styles.propertyTitle}>Block</span>
        <span className={styles.propertyValue}>{item.block}</span>
      </div>
      <div className={styles.propertyItems}>
        <span className={styles.propertyTitle}>Oxidation states</span>
        <span className={styles.propertyValue}>{item.osxidationStates}</span>
      </div>
      <div className={styles.propertyItems}>
        <span className={styles.propertyTitle}>Color</span>
        <span className={styles.propertyValue}>{item.color}</span>
      </div>
      <div className={styles.propertyItems}>
        <span className={styles.propertyTitle}>Year discovered</span>
        <span className={styles.propertyValue}>{item.yearDiscovered}</span>
      </div>
    </div>
  );
}

export default CardBody;
