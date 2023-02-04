import {
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cachedData, setCachedData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const options = useMemo(() => {
    return {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "42beb72cafmsh0e544c697f9750ep127d1ajsn9203d87b3369",
        "X-RapidAPI-Host": "periodictable.p.rapidapi.com",
      },
    };
  }, []);

  const fetchData = useCallback(async () => {
    if (cachedData) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://periodictable.p.rapidapi.com/",
        options
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const json = await response.json();
      setCachedData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [options, cachedData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const value = { cachedData, error, isLoading };

  return (
    <DataContext.Provider value={{ value }}>{children}</DataContext.Provider>
  );
};
