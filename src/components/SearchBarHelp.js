import iconClose from "../assets/images/icons/icon-close.svg";
import styles from "../css/searchBarHelp.module.css";

function SearchBarHelp({ handleClose }) {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.helpContainer}>
        <button className={styles.closeBtn} onClick={handleClose}>
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
