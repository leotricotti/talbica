import { useState, useEffect } from "react";

export function useFilterColor(blockColor, colors) {
  const [filteredColor, setFilteredColor] = useState(null);

  useEffect(() => {
    const color = colors.find((c) => c.name === blockColor);
    setFilteredColor(color?.color || null);
  }, [blockColor, colors]);

  return filteredColor;
}

export default useFilterColor;
