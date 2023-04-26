import { useState, useEffect } from "react";

export function useFormatName(name) {
  const [displayName, setDisplayName] = useState(null);

  useEffect(() => {
    const updateName = () => {
      const screenWidth = window.innerWidth;
      const truncatedName =
        name.length > (screenWidth > 1000 ? 8 : 6)
          ? `${name.slice(0, screenWidth > 1000 ? 7 : 6)}...`
          : name;
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
