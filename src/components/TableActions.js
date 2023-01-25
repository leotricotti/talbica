import tableActionsData from "../assets/data/tableActionsData";
import styles from "../css/tableActions.module.css";

function TableActions({ handleclick }) {
  return (
    <section className={styles.tableActionsContainer}>
      {tableActionsData.map((item) => {
        return (
          <button
            key={item.name}
            className={styles.tableActionButton}
            onClick={handleclick}
          >
            {" "}
            <img
              src={item.url}
              alt={item.name}
              className={styles.tableActionsImage}
            />
            <p className={styles.tableActionTitle}>{item.name}</p>
          </button>
        );
      })}
    </section>
  );
}

export default TableActions;
