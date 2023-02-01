import { useState, useEffect } from "react";

export function useFilterColor(blockColor, colors) {
  const [filteredColor, setFilteredColor] = useState(null);

  useEffect(() => {
    const color = colors.find((c) => c === blockColor);
    setFilteredColor(color);
  }, [blockColor, colors]);

  return filteredColor;
}

export default useFilterColor;
