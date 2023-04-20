import styles from "./mainTitle.module.css";

function MainTitle({ title }) {
  const [part1, part2] = title.split(".");

  return (
    <h1 className={styles.mainTitle}>
      {part1}.
      <br />
      {part2}
    </h1>
  );
}

export default MainTitle;
