import styles from "../css/cardBody.module.css";

function CardBody({ dataFromApi }) {
  return dataFromApi.map((item) => (
    <div key={item.atomicNumber} className={styles.carBodyContainer}>
      <h3 className={styles.cardBodyTitle}>Sumary</h3>
      <div className={styles.symbolData}>
        <span className={styles.propertyTitle}>Symbol</span>
        <span className={styles.propertyValue}>Symbol</span>
      </div>
    </div>
  ));
}

export default CardBody;
