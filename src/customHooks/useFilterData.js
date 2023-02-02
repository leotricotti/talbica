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
      if (items.length > 0) {
        filteredData.push({
          type: "period",
          period,
          items: items,
        });
      }
    }
    for (const period in dataByPeriod) {
      const lantanoid = dataByPeriod[period].filter(
        (item) => item.groupBlock === "lanthanoid"
      );
      if (lantanoid.length > 0) {
        filteredData.push({
          type: "groupBlock",
          groupBlock: "lanthanoid",
          items: lantanoid,
        });
      }
    }
    for (const period in dataByPeriod) {
      const actinoid = dataByPeriod[period].filter(
        (item) => item.groupBlock === "actinoid"
      );
      if (actinoid.length > 0) {
        filteredData.push({
          type: "groupBlock",
          groupBlock: "actinoid",
          items: actinoid,
        });
      }
    }

    setFilteredData(filteredData);
  }, [data]);

  return filteredData;
}

export default useFilterData;
