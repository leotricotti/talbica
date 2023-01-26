import tableActionsData from "../assets/data/tableActionsData";
import styles from "../css/tableActions.module.css";

function TableActions({ title, handleclick }) {
  return (
    <section className={styles.tableActionsContainer}>
      <h3 className={styles.tableActionsMainTitle}>{title}</h3>
      <div className={styles.gridContainer}>
        {tableActionsData.map((item) => {
          return (
            <div className={styles.gridItem}>
              <button
                className={styles.tableActionButtons}
                onClick={handleclick}
              >
                {" "}
                <div
                  style={{ backgroundImage: `url(${item.url})` }}
                  className={styles.tableActionsImage}
                ></div>
                <p className={styles.tableActionTitle}>{item.name}</p>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TableActions;
