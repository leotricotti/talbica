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

  useEffect(() => {
    document.body.style.overflow = showCard ? "hidden" : "auto";
    document.documentElement.scrollTop = 0;
  }, [showCard]);

  const handleClose = () => {
    setTimeout(() => {
      onClose();
    }, 400);
    setShowCard(false);
  };

  return (
    <>
      <div className={styles.cardOverlay}></div>
      <CSSTransition
        nodeRef={nodeRef}
        in={showCard}
        timeout={500}
        classNames={{
          enter: styles.cardEnter,
          enterActive: styles.cardEnterActive,
          extit: styles.cardExtit,
          exitActive: styles.cardExitActive,
        }}
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
        </div>
      </CSSTransition>
      <ModeSwitcherMobile />
    </>
  );
}

export default Card;
