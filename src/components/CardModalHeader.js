import styles from "../css/cardModalHeader.module.css";

function CardModalHeader({ dataFromApi, handleClick }) {
  return dataFromApi.map((item) => (
    <div key={item.atomicNumber} className={styles.CardModalHeader}>
      <button className={styles.closeBtn} onClick={() => handleClick}>
        <span>X</span>
      </button>
      <span className={styles.atomicNumber}>{item.atomicNumber}</span>
      <span className={styles.symbol}>{item.symbol}</span>
      <span className={styles.name}>{item.nameame}</span>
      <span className={styles.atomicMass}>{item.atomicMass}</span>
      <p className={styles.description}></p>
    </div>
  ));
}

export default CardModalHeader;
