import iconClose from "../assets/images/icons/icon-close.svg";
import Overlay from "./Overlay";
import styles from "./searchBarHelp.module.css";

function CloseButton({ handleShowHelp }) {
  return (
    <button className={styles.closeBtn} onClick={handleShowHelp}>
      <img src={iconClose} alt="Close button" />
    </button>
  );
}

function HelpContent({ title, text }) {
  return (
    <div className={styles.helpContent}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

function SearchBarHelp({ handleShowHelp, showHelp }) {
  return (
    <>
      <Overlay handleOverlay={showHelp} />
      <div
        className={`${styles.helpContainer}
    ${showHelp ? styles.helpOpen : ""}`}
      >
        <CloseButton handleShowHelp={handleShowHelp} />
        <HelpContent
          title="Search by name"
          text="Type a compound name in the search field. If the compound is found, the
        App will display its component."
        />
      </div>
    </>
  );
}

export default SearchBarHelp;
