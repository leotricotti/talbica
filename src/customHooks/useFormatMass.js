import { useState, useEffect } from "react";

export function useFormatMass(mass) {
  const [displayMass, setDisplayMass] = useState(null);

  useEffect(() => {
    const atomicMass = parseFloat(mass);

    const formattedMass =
      atomicMass % 1 === 0
        ? `[${atomicMass.toFixed(0)}]`
        : atomicMass % 0.1 === 0
        ? atomicMass.toFixed(1)
        : atomicMass.toFixed(3);

    setDisplayMass(formattedMass);
  }, [mass]);

  return displayMass;
}

export default useFormatMass;
