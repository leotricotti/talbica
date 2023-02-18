import { useState } from "react";
import iconClose from "../assets/images/icons/icon-close.svg";
import styles from "../css/searchBarHelp.module.css";

function SearchBarHelp({ handleClose }) {
  const [isAnimated, setIsAnimated] = useState(true);

  const handleClick = () => {
    setTimeout(() => {
      handleClose();
    }, 300);
    setIsAnimated(false);
  };

  return (
    <>
      <div className={styles.overlay}></div>
      <div
        className={`${styles.helpContainer}
      ${isAnimated ? styles.animationOpen : styles.animationClose}`}
      >
        <button className={styles.closeBtn} onClick={handleClick}>
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
