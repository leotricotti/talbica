import { NavLink } from "react-router-dom";
import styles from "../css/elementTypes.module.css";

function Title({ title }) {
  return <h3 className={styles.elementTitle}>{title}</h3>;
}

function NavElement({ items, themeHandler }) {
  return (
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
  );
}

function ElementTypes({ items, themeHandler }) {
  return (
    <div className={styles.tableContainer}>
      <Title title="Element types" />
      <NavElement items={items} themeHandler={themeHandler} />
    </div>
  );
}

export default ElementTypes;
