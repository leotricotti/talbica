import MainTitle from "../components/MainTitle";
import styles from "../css/home.module.css";

function Home() {
  return (
    <main className={styles.tableContainer}>
      <MainTitle title={"Periodic table. Interactive chemistry"} />
    </main>
  );
}

export default Home;
