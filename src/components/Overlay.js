import styles from "./overlay.module.css";

function Overlay({ handleOverlay }) {
  return (
    <div
      className={`${styles.overlay} ${
        handleOverlay ? styles.showOverlay : ""
      } `}
    />
  );
}

export default Overlay;
