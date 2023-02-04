import { useState, useEffect } from "react";

function useFadeIn(duration = 1) {
  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFaded(true);
    }, duration * 1000);
    return () => clearTimeout(timer);
  }, [duration]);

  return isFaded;
}

export default useFadeIn;
