import { useState } from "react";
import tableActionsData from "../assets/data/tableActionsData";
import styles from "../css/tableActions.module.css";

function TableActions({ title }) {
  const [activated, setActivated] = useState(null);

  const handleClickActions = (id) => {
    setActivated(id);
  };

  return (
    <section className={styles.tableActionsContainer}>
      <h3 className={styles.tableActionsMainTitle}>{title}</h3>
      <div className={styles.gridContainer}>
        {tableActionsData.map((item) => {
          return (
            <button
              className={` ${styles.gridItem} ${
                item.id === activated ? styles.isActiveTableActions : ""
              }`}
              key={item.id}
              onClick={() => handleClickActions(item.id)}
            >
              <div className={styles.tableActionButtons}>
                {" "}
                <div
                  style={{ backgroundImage: `url(${item.url})` }}
                  className={styles.tableActionsImage}
                ></div>
                <p className={styles.tableActionTitle}>{item.name}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default TableActions;
