import { useState, useEffect } from "react";

const useFormatColorName = (grupBlockApi) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!grupBlockApi) return;

    const words = grupBlockApi.split(" ");
    const formattedWords = words.map((word, index) => {
      if (index === 0) {
        return `--color${word[0].toUpperCase()}${word.slice(1)}`;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    });
    setOutput(formattedWords.join(""));
  }, [grupBlockApi]);

  return output;
};

export default useFormatColorName;
