import styles from "../css/toggleMenu.module.css";

function TableSwitcher({ icon, title, handleClick }) {
  return (
    <div className={styles.tableSwitcher}>
      <button className={styles.tableSwitcherButton} onClick={handleClick}>
        <img
          src={icon}
          alt="Switcher button"
          className={styles.tableSwitcherIcon}
        />
        <p className={styles.tableSwitcherMenuTitle}>{title}</p>
      </button>
    </div>
  );
}

export default TableSwitcher;
