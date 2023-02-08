import useCutString from "../customHooks/useCutString";
import useFormatMass from "../customHooks/useFormatMass";
import styles from "../css/cardHeader.module.css";

function CardModalHeader({ dataFromApi, backgroundColor }) {
  const item = dataFromApi;
  const history = useCutString(item.history);
  const formatMass = useFormatMass(item.atomicMass);

  return (
    <div key={item.atomicNumber} className={styles.cardlHeaderContainer}>
      <span className={styles.atomicNumber}>{item.atomicNumber}</span>
      <span className={styles.symbol}>{item.symbol}</span>
      <span className={styles.name}>{item.name}</span>
      <span className={styles.atomicMass}>{formatMass}</span>
      <p className={`${styles.description} ${styles.maskText}`}>{history}</p>
      <div
        className={styles.cardBtnContainer}
        style={{
          backgroundColor: `var(${backgroundColor})`,
        }}
      >
        <button className={styles.cardBtn}>Show more</button>
      </div>
    </div>
  );
}

export default CardModalHeader;
