import { useState } from "react";
import tableSwitcherData from "../assets/data/tableSwitcherData";
import styles from "../css/tableSwitcher.module.css";

function TableSwitcher({ title }) {
  const [activated, setActivated] = useState(tableSwitcherData[0].id);

  const handleClick = (id) => {
    setActivated(id);
  };

  return (
    <div className={styles.tableSwitcherContainer}>
      {tableSwitcherData.map((item) => (
        <button
          key={item.id}
          className={` ${styles.tableSwitcher} ${
            item.id === activated ? styles.isActive : ""
          }`}
          onClick={() => handleClick(item.id)}
        >
          <div>
            <img
              src={item.url}
              alt="Switcher button"
              className={styles.tableSwitcherIcon}
            />
            <p className={styles.tableSwitcherMenuTitle}>{item.name}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default TableSwitcher;
