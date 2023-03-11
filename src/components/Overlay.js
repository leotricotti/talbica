import styles from "../css/overlay.module.css";

function Overlay({ handleOverlay }) {
  return (
    <div
      className={`${styles.overlay} ${
        { handleOverlay } ? styles.overlayOpen : styles.overlayClose
      }`}
    />
  );
}

export default Overlay;