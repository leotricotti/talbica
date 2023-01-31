import TableRowElement from "./TableRowElement";
import TableRowTitle from "./TableRowTitle";
import tableColors from "../assets/data/tableColors";
import styles from "../css/tableRow.module.css";

function TableRow({ prevPeriod, dataFromApi }) {
  return (
    <div className={styles.tableRowContainer}>
      {dataFromApi.map((item) => {
        if (prevPeriod !== item.period) {
          prevPeriod = item.period;
          return (
            <div className={styles.tableRow} key={item.period}>
              <TableRowTitle period={item.period} item={item} />
              <div className={styles.tableRowGrid}>
                {dataFromApi
                  .filter((i) => i.period === item.period)
                  .map((i) => (
                    <TableRowElement
                      key={i.name}
                      item={i}
                      colors={tableColors}
                    />
                  ))}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default TableRow;
