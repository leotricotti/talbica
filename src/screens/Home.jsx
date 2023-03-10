import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Spinner from "../components/Spinner";
import HeaderMobile from "../components/HeaderMobile";
import SearcBar from "../components/SearchBar";
import Table from "../components/Table";
import styles from "../css/home.module.css";

function Home() {
  const { dataFromApi, error, isLoading } = useContext(DataContext).value;
  const { themeHandler } = useContext(ThemeContext).value;

  function Overlay() {
    return <div className={styles.overlay} />;
  }

  function ErrorModal() {
    return (
      <div className={styles.errorModal}>
        <h1 className={styles.errorMessage}>
          Connection failed. Please try again later.
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <>
        <Overlay />
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

export default Home;
