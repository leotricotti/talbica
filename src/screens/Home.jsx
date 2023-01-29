import HeaderMobile from "../components/HeaderMobile";
import Table from "../components/Table";
import styles from "../css/home.module.css";

function Home() {
  return (
    <div className={styles.tableContainer}>
      <HeaderMobile />
      <Table />
    </div>
  );
}

export default Home;
