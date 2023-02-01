import { useState, useMemo } from "react";

function useFilterData(data) {
  const [filteredData, setFilteredData] = useState([]);

  useMemo(() => {
    const dataByPeriod = [];
    data.forEach((item) => {
      if (!dataByPeriod[item.period]) {
        dataByPeriod[item.period] = [];
      }
      dataByPeriod[item.period].push(item);
    });

    const filteredData = [];
    for (const period in dataByPeriod) {
      const items = dataByPeriod[period].filter(
        (item) =>
          item.groupBlock !== "lanthanoid" && item.groupBlock !== "actinoid"
      );

      console.log(items);
      const matchingItems = items.filter(
        (item) =>
          item.groupBlock === "lanthanoid" || item.groupBlock === "actinoid"
      );
      if (matchingItems.length > 0) {
        matchingItems.forEach((item) => {
          filteredData.push({
            type: "groupBlock",
            groupBlock: item.groupBlock,
            items: dataByPeriod[period],
          });
        });
      } else if (items.length > 0) {
        filteredData.push({
          type: "period",
          period,
          items,
        });
      }
    }
    setFilteredData(filteredData);
  }, [data]);

  return filteredData;
}

export default useFilterData;
