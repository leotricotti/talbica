import styles from "./mainTitle.module.css";

function MainTitle({ title }) {
  return <h1 className={styles.mainTitle}>{title}</h1>;
}

export default MainTitle;
