import CardModalHeader from "./CardModalHeader";
import styles from "../css/cardModal.module.css";

function CardModal({ item, show, closeBtn }) {
  console.log(show);
  return (
    <div className={show ? styles.showCard : styles.hideCard}>
      <CardModalHeader item={item} closeBtn={closeBtn} />
    </div>
  );
}

export default CardModal;
