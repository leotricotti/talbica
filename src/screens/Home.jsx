import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import Loader from "../components/Loader";
import HeaderMobile from "../components/HeaderMobile";
import Table from "../components/Table";
import SearcBar from "../components/SearchBar";
import styles from "../css/home.module.css";
import CardModal from "../components/CardModal";

function Home() {
  const { dataFromApi, error, isLoading } = useContext(DataContext).value;
  const [opendCardModal, setOpenCardModal] = useState(false);

  const handleClickCardModal = () => {
    setOpenCardModal(true);
  };

  console.log(opendCardModal);

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
      <SearcBar />
      <Table dataFromApi={dataFromApi} />
      <CardModal
        dataFromApi={dataFromApi}
        showModal={() => handleClickCardModal()}
      />
    </div>
  );
}

export default Home;
