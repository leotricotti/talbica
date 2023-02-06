import { useParams } from "react-router-dom";
import CardModalHeader from "../components/CardModalHeader";
import styles from "../css/cardModal.module.css";

function CardModal({ show, closeBtn }) {
  const elementId = useParams();
  console.log(elementId);
  return (
    <div className={show ? styles.showCard : styles.hideCard}>
      <CardModalHeader dataFromApi={elementId} closeBtn={closeBtn} />
    </div>
  );
}

export default CardModal;
