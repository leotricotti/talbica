import { useState, useEffect } from "react";

function useRandomDelay(min, max) {
  const [delay, setDelay] = useState("");

  useEffect(() => {
    setDelay((Math.random() * (max - min) + min).toFixed(4).toString() + "s");
  }, [max, min]);

  return delay;
}

export default useRandomDelay;
