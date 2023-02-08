import styles from "../css/cardBody.module.css";

function CardBody({ dataFromApi }) {
  const item = dataFromApi;

  return (
    <div key={item.atomicNumber} className={styles.carBodyContainer}>
      <h3 className={styles.cardBodyTitle}>Summary</h3>
      <div className={styles.propertyItems}>
        <span className={styles.propertyTitle}>Symbol</span>
        <span className={styles.propertyValue}>{item.symbol}</span>
      </div>
    </div>
  );
}

export default CardBody;
