import tableSwitcherData from "../assets/data/tableSwitcherData";
import styles from "../css/modeSwitcher.module.css";

function ModeSwitcher() {
  const colorMode = () => {
    document.body.classList.add("colorMode");
    document.body.classList.remove("photoMode");
  };

  const photoMode = () => {
    document.body.classList.add("photoMode");
    document.body.classList.remove("colorMode");
  };

  const handleClick = (id) => {
    if (id === 1) {
      colorMode();
    } else {
      photoMode();
    }
  };

  return (
    <div className={styles.modeSwitcherContainer}>
      {tableSwitcherData.map((item) => (
        <button
          key={item.id}
          className={styles.modeSwitcher}
          onClick={() => handleClick(item.id)}
        >
          <div>
            <img
              src={item.url}
              alt="Switcher button"
              className={styles.modeSwitcherIcon}
            />
            <p
              className={`${styles.modeSwitcherMenuTitle} ${
                photoMode ? styles.photoModeMenuTitle : ""
              }`}
            >
              {item.name}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default ModeSwitcher;
