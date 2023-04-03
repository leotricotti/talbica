import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Spinner from "../components/Spinner";
import HeaderMobile from "../components/HeaderMobile";
import SearcBar from "../components/SearchBar";
import Table from "../components/Table";
import styles from "./mobileApp.module.css";

function ErrorModal() {
  return (
    <div className={styles.errorModal}>
      <h1 className={styles.errorMessage}>
        Connection failed. Please try again later.
      </h1>
    </div>
  );
}

function MobileApp() {
  const { dataFromApi, error, isLoading } = useContext(DataContext).value;
  const { themeHandler } = useContext(ThemeContext).value;

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
    >
      <HeaderMobile />
      <SearcBar dataFromApi={dataFromApi} />
      <Table
        dataFromApi={dataFromApi}
        isLoading={isLoading}
        themeHandler={themeHandler}
      />
    </div>
  );
}

export default MobileApp;
