import { useContext } from "react";
import { PhotoModeContext } from "../contexts/PhotoModeContext";
import styles from "../css/mainTitle.module.css";

function MainTitle({ title }) {
  const { photoMode } = useContext(PhotoModeContext).value;

  console.log(photoMode);

  return (
    <h1
      className={`${styles.mainTitle} ${
        photoMode ? styles.photoModeActive : ""
      }`}
    >
      {title}
    </h1>
  );
}

export default MainTitle;
