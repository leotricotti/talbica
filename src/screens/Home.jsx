import HeaderMobile from "../components/HeaderMobile";
import Table from "../components/Table";
import SearcBar from "../components/SearchBar";
import styles from "../css/home.module.css";

function Home() {
  return (
    <div className={styles.tableContainer}>
      <HeaderMobile />
      <SearcBar />
      <Table />
    </div>
  );
}

export default Home;
