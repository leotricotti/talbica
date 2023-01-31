import { useState, useEffect } from "react";

export function useFormatName(name) {
  const [displayName, setDisplayName] = useState(null);

  useEffect(() => {
    const truncatedName = name.length >= 9 ? `${name.slice(0, 9)}...` : name;

    setDisplayName(truncatedName);
  }, [name]);

  return displayName;
}

export default useFormatName;
