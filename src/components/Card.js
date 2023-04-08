import Overlay from "./Overlay";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardModeSwitcher from "./CardModeSwitcher";
import styles from "./card.module.css";

function CardContainer({ children, backgroundColor, showCard }) {
  return (
    <div
      className={`${styles.cardContainer} ${showCard ? styles.cardOpen : ""}`}
      style={{
        backgroundColor: `var(${backgroundColor})`,
      }}
    >
      {children}
    </div>
  );
}

function CloseBtn({ handleClose }) {
  return (
    <button className={styles.closeBtn} onClick={handleClose}>
      <div className={styles.closeIcon}></div>
    </button>
  );
}

function Card({ dataFromApi, backgroundColor, showCard, handleClose }) {
  return (
    <>
      <Overlay handleOverlay={showCard} />
      <CardContainer backgroundColor={backgroundColor} showCard={showCard}>
        <CloseBtn handleClose={handleClose} />
        <CardHeader
          dataFromApi={dataFromApi}
          backgroundColor={backgroundColor}
        />
        <CardBody dataFromApi={dataFromApi} />
        <CardModeSwitcher />
      </CardContainer>
    </>
  );
}

export default Card;
