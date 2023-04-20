import { useContext, useState, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Spinner from "../components/Spinner";
import Header from "../components/Header";
import SearcBar from "../components/SearchBar";
import Table from "../components/Table";
import styles from "./tableApp.module.css";

function ErrorModal() {
  return (
    <div className={styles.errorModal}>
      <h1 className={styles.errorMessage}>
        Connection failed. Please try again later.
      </h1>
    </div>
  );
}

function TableApp() {
  const { dataFromApi, error, isLoading } = useContext(DataContext).value;
  const { themeHandler } = useContext(ThemeContext).value;
  const [scale, setScale] = useState(false);

  useEffect(() => {
    if (window.screen.width > 500) {
      setScale(true);
    }
  }, [scale]);

  if (error) {
    return (
      <>
        <ErrorModal />
      </>
    );
  }

  if (!dataFromApi) {
    return <Spinner />;
  }

  return (
    <div
      className={`${styles.tableContainer} ${
        themeHandler
          ? `${styles.photoMode} ${styles.backgroundImage}`
          : styles.colorMode
      }`}
      style={{ scale: `${scale ? ".5" : "1"}`, height: "1156px" }}
    >
      <Header />
      <SearcBar dataFromApi={dataFromApi} />
      <Table
        dataFromApi={dataFromApi}
        isLoading={isLoading}
        themeHandler={themeHandler}
      />
    </div>
  );
}

export default TableApp;
