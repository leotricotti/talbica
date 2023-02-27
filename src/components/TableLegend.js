import { NavLink } from "react-router-dom";
import styles from "../css/tableLegend.module.css";

function TableLegend({ items, themeHandler }) {
  return (
    <div className={styles.tableContainer}>
      <h3 className={styles.elementTitle}>Element types</h3>
      <ul className={styles.listContainer}>
        {items.map((item) => (
          <NavLink
            target="blank"
            to={item.url}
            key={item.id}
            className={styles.listItems}
          >
            <span
              className={`${styles.elementColor} ${
                themeHandler ? styles.displayNone : ""
              }`}
              style={{ backgroundColor: `var(${item.color})` }}
            ></span>
            <span className={styles.elementName}>{item.name}</span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default TableLegend;
