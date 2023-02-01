import { useState, useEffect } from "react";
import TableRowElement from "./TableRowElement";
import TableRowTitle from "./TableRowTitle";
import tableColors from "../assets/data/tableColors";
import styles from "../css/tableRow.module.css";

function TableRow({ dataFromApi }) {
  const colors = tableColors.map((color) => {
    return color;
  });

  const [groupedData, setGroupedData] = useState({});

  useEffect(() => {
    const groupByPeriod = dataFromApi.reduce((acc, curr) => {
      if (curr.groupBlock === "lanthanoid" || curr.groupBlock === "actinoid") {
        if (!acc[curr.groupBlock]) {
          acc[curr.groupBlock] = [];
        }
        acc[curr.groupBlock].push(curr);
      } else if (!acc[curr.period]) {
        acc[curr.period] = [];
      } else {
        acc[curr.period].push(curr);
      }
      return acc;
    }, {});
    setGroupedData(groupByPeriod);
  }, [dataFromApi]);

  return (
    <div className={styles.tableRowContainer}>
      {Object.entries(groupedData).map(([key, value]) => (
        <div className={styles.tableRow} key={key}>
          <TableRowTitle period={key} groupBlock={key} />
          <div className={styles.tableRowGrid}>
            {value.map((i) => (
              <TableRowElement key={i.name} item={i} colors={colors} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TableRow;
