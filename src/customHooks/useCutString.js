import { useState, useEffect } from "react";

function useCutString(data) {
  const [cutData, setCutData] = useState("");

  useEffect(() => {
    const cutIndex = data.indexOf(".", data.indexOf(".") + 1);
    setCutData(data.slice(0, cutIndex));
  }, [data]);

  return cutData;
}

export default useCutString;
