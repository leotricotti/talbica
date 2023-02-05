import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataFromApi, setDataFromApi] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://periodictable.p.rapidapi.com/", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "42beb72cafmsh0e544c697f9750ep127d1ajsn9203d87b3369",
        "X-RapidAPI-Host": "periodictable.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setDataFromApi(json);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [setError]);

  const value = { dataFromApi, error, isLoading };

  return (
    <DataContext.Provider value={{ value }}>{children}</DataContext.Provider>
  );
};
