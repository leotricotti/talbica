import styles from "../css/tableSwitcher.module.css";

function TableSwitcher({ icon, title, className, handleClickSwitcher }) {
  return (
    <div className={styles.tableSwitcher}>
      <button className={className} onClick={handleClickSwitcher}>
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
