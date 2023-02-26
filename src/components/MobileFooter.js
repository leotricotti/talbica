import styles from "../css/mobileFooter.module.css";

function MobileFooter({ developer }) {
  return (
    <div className={styles.footerContainer}>
      <span className={styles.developer}>{developer} Hello</span>
    </div>
  );
}

export default MobileFooter;
