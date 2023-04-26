import { useState, useEffect } from "react";

export function useFormatName(name) {
  const [displayName, setDisplayName] = useState(null);

  useEffect(() => {
    const updateName = () => {
      const truncatedName = name.length > 7 ? `${name.slice(0, 5)}...` : name;
      setDisplayName(truncatedName);
    };
    updateName();

    window.addEventListener("resize", updateName);

    return () => {
      window.removeEventListener("resize", updateName);
    };
  }, [name]);

  return displayName;
}

export default useFormatName;
