import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import Spinner from "../components/Spinner";
import Loader from "../components/Loader";
import HeaderMobile from "../components/HeaderMobile";
import Table from "../components/Table";
import SearcBar from "../components/SearchBar";
import styles from "../css/home.module.css";

function Home() {
  const { dataFromApi, error, isLoading } = useContext(DataContext).value;

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!dataFromApi) {
    return <Spinner />;
  }

  return (
    <div className={styles.tableContainer}>
      <HeaderMobile />
      <SearcBar dataFromApi={dataFromApi} />
      <Table dataFromApi={dataFromApi} />
    </div>
  );
}

export default Home;
