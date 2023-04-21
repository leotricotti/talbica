import useFilterData from "../customHooks/useFilterData";
import TableRowElement from "./TableRowElement";
import { tableColors } from "../assets/data/tableColors";
import styles from "./tableRow.module.css";

function TableRowTitle({ period, groupBlock }) {
  return groupBlock === "lanthanoid" || groupBlock === "actinoid" ? (
    <h3 className={`${styles.groupTitle} ${styles.title}`}>
      {groupBlock + "s"}
    </h3>
  ) : (
    <h3 className={styles.title}>Period {period}</h3>
  );
}

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
            {Array.from({ length: 18 - items.length }, (_, index) => (
              <div key={index} className={styles.emptyCell}></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TableRow;
