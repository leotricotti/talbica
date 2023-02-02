import { useState, useMemo } from "react";

function useFilterData(data) {
  const [filteredData, setFilteredData] = useState([]);

  console.log(filteredData);

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
      if (items.length > 0) {
        filteredData.push({
          type: "period",
          period,
          items: items,
        });
      }
    }
    for (const period in dataByPeriod) {
      const matchingItems = dataByPeriod[period].filter(
        (item) =>
          item.groupBlock === "lanthanoid" || item.groupBlock === "actinoid"
      );
      if (matchingItems.length > 0) {
        filteredData.push({
          type: "groupBlock",
          period,
          items: matchingItems,
        });
      }
    }

    setFilteredData(filteredData);
  }, [data]);

  return filteredData;
}

export default useFilterData;
