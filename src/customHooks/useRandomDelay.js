import { useState, useEffect } from "react";

function useRandomDelay() {
  const [delay, setDelay] = useState("");

  useEffect(() => {
    setDelay(Math.random().toFixed(4).toString() + "s");
  }, [delay]);

  return delay;
}

export default useRandomDelay;
