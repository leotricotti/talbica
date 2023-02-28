import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Spinner from "../components/Spinner";
import HeaderMobile from "../components/HeaderMobile";
import Table from "../components/Table";
import SearcBar from "../components/SearchBar";
import styles from "../css/home.module.css";

function Home() {
  const { dataFromApi, error, isLoading } = useContext(DataContext).value;
  const { themeHandler } = useContext(ThemeContext).value;

  if (error) {
    return <p>{error}</p>;
  }

  if (!dataFromApi) {
    return <Spinner />;
  }

  console.log(error);

  return (
    <div
      className={`${styles.tableContainer} ${
        themeHandler
          ? `${styles.photoMode} ${styles.backgroundImage}`
          : styles.colorMode
      }`}
    >
      <HeaderMobile themeHandler={themeHandler} />
      <SearcBar dataFromApi={dataFromApi} />
      <Table dataFromApi={dataFromApi} isLoading={isLoading} />
    </div>
  );
}

export default Home;
