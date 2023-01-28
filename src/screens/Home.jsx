import HeaderMobile from "../components/HeaderMobile";
import Table from "../components/Table";
import styles from "../css/home.module.css";

function Home() {
  return (
    <main className={styles.tableContainer}>
      <HeaderMobile />
      <Table />
      <h1>Hello</h1>
    </main>
  );
}

export default Home;
