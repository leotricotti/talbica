import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import Loader from "../components/Loader";
import HeaderMobile from "../components/HeaderMobile";
import Table from "../components/Table";
import SearcBarSection from "../components/SearchBarSection";
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
    return <Loader />;
  }

  return (
    <div className={styles.tableContainer}>
      <HeaderMobile />
      <SearcBarSection />
      <Table dataFromApi={dataFromApi} />
    </div>
  );
}

export default Home;
