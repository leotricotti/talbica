import { useEffect, useState, useCallback, useMemo } from "react";
// import styles from "../css/table.module.css";

function Table({ title }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(data);

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
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (data === null) {
    return <p>No data found</p>;
  }

  return;
}

export default Table;
