import colorIcon from "../assets/images/icons/icon-palette.png";
import photoIcon from "../assets/images/icons/icon-ruby.png";
import TableSwitcher from "./TableSwitcher";
import { useState } from "react";
import styles from "../css/toggleMenu.module.css";

function ToggleMenu() {
  const [color, setColor] = useState(false);
  const [photos, sePhotos] = useState(false);

  const handleColor = () => {
    setColor(!color);
  };

  const handlePhotos = () => {
    sePhotos(!photos);
  };

  return (
    <div className={styles.tableSwitcherContainer}>
      <TableSwitcher
        icon={colorIcon}
        title={"Colors"}
        handleClick={handleColor}
      />
      <TableSwitcher
        icon={photoIcon}
        title={"Photos"}
        handleClick={handlePhotos}
      />
    </div>
  );
}

export default ToggleMenu;
