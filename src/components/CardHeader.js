import useCutString from "../customHooks/useCutString";
import styles from "../css/cardHeader.module.css";

function CardModalHeader({ dataFromApi }) {
  const item = dataFromApi;
  const history = useCutString(item.history);

  return (
    <div key={item.atomicNumber} className={styles.cardlHeaderContainer}>
      <span className={styles.atomicNumber}>{item.atomicNumber}</span>
      <span className={styles.symbol}>{item.symbol}</span>
      <span className={styles.name}>{item.name}</span>
      <span className={styles.atomicMass}>{item.atomicMass}</span>
      <p className={styles.description}>{history}</p>
    </div>
  );
}

export default CardModalHeader;
