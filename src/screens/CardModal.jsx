import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import CardModalHeader from "../components/CardModal";
import styles from "../css/cardModal.module.css";

function CardModal() {
  const { cachedData } = useContext(DataContext).value;
  console.log(cachedData);

  return (
    <h1>Hello</h1>
    // <div className={styles}>
    //   {/* {cachedData.map((item) => ( */}
    //   <CardModalHeader />
    //   ))}
    // </div>
  );
}

export default CardModal;
