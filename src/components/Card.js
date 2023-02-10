import CardHeader from "./CardHeader";
import CardBody from "./CarBody";
import ModeSwitcherMobile from "./ModeSwitcherMobile";
import styles from "../css/card.module.css";

function Card({ dataFromApi, backgroundColor, onClose }) {
  return (
    <>
      <div className={styles.overlayBlack}></div>
      <div
        className={styles.cardContainer}
        style={{
          backgroundColor: `var(${backgroundColor})`,
        }}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          <span className={styles.closeIcon}>x</span>
        </button>
        <CardHeader
          dataFromApi={dataFromApi}
          backgroundColor={backgroundColor}
        />
        <CardBody dataFromApi={dataFromApi} />
        <ModeSwitcherMobile />
      </div>
    </>
  );
}

export default Card;
