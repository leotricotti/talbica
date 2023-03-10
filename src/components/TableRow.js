import useFilterData from "../customHooks/useFilterData";
import TableRowElement from "./TableRowElement";
import TableRowTitle from "./TableRowTitle";
import { tableColors } from "../assets/data/tableColors";
import styles from "../css/tableRow.module.css";

function TableRow({ dataFromApi, themeHandler }) {
  const colors = tableColors.map((color) => {
    return color;
  });
  const filteredData = useFilterData(dataFromApi);

  return (
    <div className={styles.tableRowContainer}>
      {filteredData.map(({ type, period, groupBlock, items }) => (
        <div
          className={styles.tableRow}
          key={type === "period" ? period : groupBlock}
        >
          {type === "period" ? (
            <TableRowTitle period={period} />
          ) : (
            <TableRowTitle groupBlock={groupBlock} />
          )}
          <div className={styles.tableRowGrid}>
            {items.map((item) => (
              <TableRowElement
                key={item.atomicNumber}
                item={item}
                colors={colors}
                themeHandler={themeHandler}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TableRow;
