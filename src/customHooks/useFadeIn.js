import { useState, useEffect } from "react";

function useFadeIn(duration) {
  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFaded(true);
    }, duration * 100);
    return () => clearTimeout(timer);
  }, [duration]);

  return isFaded;
}

export default useFadeIn;
