import { CSSTransition } from "react-transition-group";
import { useState, useRef, useEffect } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CarBody";
import ModeSwitcherMobile from "./ModeSwitcherMobile";
import styles from "../css/card.module.css";

function Card({ dataFromApi, backgroundColor, onClose, selectedElement }) {
  const [showCard, setShowCard] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setShowCard(true);
  }, [selectedElement]);

  const handleClose = () => {
    setShowCard(false);
    setTimeout(() => {
      onClose();
    }, 100);
  };

  console.log(showCard);

  return (
    <>
      <div className={styles.overlayBlack}></div>
      <CSSTransition
        nodeRef={nodeRef}
        in={showCard}
        timeout={1000}
        classNames={{
          enter: styles.cardEnter,
          enterActive: styles.cardEnterActive,
          exit: styles.cardExit,
          exitActive: styles.cardExitActive,
        }}
        unmountOnExit
      >
        <div
          ref={nodeRef}
          className={styles.cardContainer}
          style={{
            backgroundColor: `var(${backgroundColor})`,
          }}
        >
          <button className={styles.closeBtn} onClick={handleClose}>
            <span className={styles.closeIcon}>x</span>
          </button>
          <CardHeader
            dataFromApi={dataFromApi}
            backgroundColor={backgroundColor}
            selectedElement={selectedElement}
          />
          <CardBody dataFromApi={dataFromApi} />
          <ModeSwitcherMobile />
        </div>
      </CSSTransition>
    </>
  );
}

export default Card;
