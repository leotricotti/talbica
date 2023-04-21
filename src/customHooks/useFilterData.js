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

    // Loop through the data and modify the period value of the item with symbol "Hi"
    data.forEach((item) => {
      if (item.symbol === "Fr" || item.symbol === "Ra") {
        item.period = "7";
      }
    });

    // Group the data with the modified period values
    for (const period in dataByPeriod) {
      const items = dataByPeriod[period].filter(
        (item) =>
          (item.groupBlock !== "lanthanoid" &&
            item.groupBlock !== "actinoid" &&
            item.symbol !== "Lr") ||
          item.symbol === "La" ||
          item.symbol === "Ac"
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
        (item) => item.groupBlock === "actinoid" || item.symbol === "Lr"
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
