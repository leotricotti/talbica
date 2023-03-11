import iconClose from "../assets/images/icons/icon-close.svg";
import Overlay from "./Overlay";
import styles from "../css/searchBarHelp.module.css";

function SearchBarHelp({ handleClickShowHelp, isAnimated }) {
  return (
    <>
      <Overlay handleOverlay={isAnimated} />
      <div
        className={`${styles.helpContainer}
      ${isAnimated ? styles.animationOpen : styles.animationClose}`}
      >
        <button className={styles.closeBtn} onClick={handleClickShowHelp}>
          <img src={iconClose} alt="Close button" />
        </button>
        <h3 className={styles.title}>Search by name</h3>
        <p className={styles.text}>
          Type a compound name in the search field. If the compound is found,
          the App will display its component.
        </p>
      </div>
    </>
  );
}

export default SearchBarHelp;
