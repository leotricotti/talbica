import TableSwitcher from "./TableSwitcher";
import TableActions from "./TableActions";
import styles from "../css/toggleMenu.module.css";

function ToggleMenu({ isOpen }) {
  return (
    <div className={`${true ? styles.openToggle : styles.hiddeToggle}`}>
      <TableSwitcher />
      <TableActions title={"Heatmaps"} />
    </div>
  );
}

export default ToggleMenu;
