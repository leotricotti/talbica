import {
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import useErrorHandler from "../customHooks/useErrorHandler";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataFromApi, setDataFromApi] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, handleError, clearError] = useErrorHandler();

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
    setIsLoading(true);
    clearError();

    try {
      const response = await fetch(
        "https://periodictable.p.rapidapi.com/",
        options
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const json = await response.json();
      setDataFromApi(json);
    } catch (err) {
      handleError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [options, clearError, handleError]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const value = { dataFromApi, error, isLoading };

  return (
    <DataContext.Provider value={{ value }}>{children}</DataContext.Provider>
  );
};
