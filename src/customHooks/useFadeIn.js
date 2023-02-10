import { useState, useEffect } from "react";

function useFadeIn() {
  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFaded(true);
    }, 1);
    return () => clearTimeout(timer);
  }, []);

  return isFaded;
}

export default useFadeIn;
