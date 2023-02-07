import { useState, useEffect } from "react";

function useCutString(data) {
  const [cutData, setCutData] = useState("");

  useEffect(() => {
    let count = 0;
    let cutIndex = -1;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === ".") {
        count++;
        if (count === 4) {
          cutIndex = i;
          break;
        }
      }
    }
    if (cutIndex !== -1) {
      setCutData(data.slice(0, cutIndex + 1));
    } else {
      setCutData(data);
    }
  }, [data]);

  return cutData;
}

export default useCutString;
