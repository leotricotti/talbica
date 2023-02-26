import { NavLink } from "react-router-dom";
import styles from "../css/tableLegend.module.css";

function TableLegend({ items }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Element types</h3>
      {items.map((item) => (
        <ul className={styles.listContainer}>
          <NavLink to={item.url} key={item.id} className={styles.listItems}>
            <span
              className={styles.color}
              style={{ backgroundColor: item.color }}
            ></span>
            <span>{item.name}</span>
          </NavLink>
        </ul>
      ))}
    </div>
  );
}

export default TableLegend;
