import { useState, useEffect, Fragment } from "react";
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
  const [bigTable, setBigTable] = useState(true);

  useEffect(() => {
    function handleResize() {
      setBigTable(window.innerWidth >= 500);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {bigTable ? (
        <>
          {filteredData.map(({ items }, index) => (
            <div className={styles.tableRowGrid} key={`row-${index}`}>
              {" "}
              {items.map((item) => {
                if (item.symbol === "H") {
                  return (
                    <Fragment key={item.symbol}>
                      <TableRowElement
                        key={item.atomicNumber}
                        item={item}
                        colors={colors}
                        themeHandler={themeHandler}
                        filteredData={items}
                      />
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={`empty-${i + 2000}`}
                          className={styles.emptyCell}
                        ></div>
                      ))}
                    </Fragment>
                  );
                }
                if (item.symbol === "Be" || item.symbol === "Mg") {
                  return (
                    <Fragment key={item.symbol}>
                      <TableRowElement
                        key={item.atomicNumber}
                        item={item}
                        colors={colors}
                        themeHandler={themeHandler}
                        filteredData={items}
                      />
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={`empty-${i}`}
                          className={styles.emptyCell}
                        ></div>
                      ))}
                    </Fragment>
                  );
                } else {
                  // Add elements
                  return (
                    <TableRowElement
                      key={item.atomicNumber}
                      item={item}
                      colors={colors}
                      themeHandler={themeHandler}
                      filteredData={items}
                    />
                  );
                }
              })}
            </div>
          ))}
        </>
      ) : (
        <div className={styles.tableRowContainer}>
          {filteredData.map(({ type, period, groupBlock, items }, index) => (
            <div
              className={styles.tableRow}
              key={type === "period" ? period : groupBlock}
            >
              {type === "period" ? (
                <TableRowTitle period={period} />
              ) : (
                <TableRowTitle groupBlock={groupBlock} />
              )}
              <div className={styles.tableRowGrid} key={`row-${index}`}>
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
      )}
    </>
  );
}

export default TableRow;
