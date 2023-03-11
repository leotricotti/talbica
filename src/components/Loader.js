import styles from "../css/loader.module.css";

function ElementItem({ itemStyle, value }) {
  return <span className={itemStyle}>{value}</span>;
}

function Element({ elementStyle, children }) {
  return <div className={` ${styles.element} ${elementStyle}`}>{children}</div>;
}

function Loader() {
  return (
    <div className={styles.loaderElementContainer}>
      <Element elementStyle={styles.bromineElement}>
        <ElementItem itemStyle={styles.atomicNumberBromine} value={"35"} />
        <ElementItem itemStyle={styles.symbolBromine} value={"Br"} />
        <ElementItem itemStyle={styles.nameBromine} value={"Bromine"} />
        <ElementItem itemStyle={styles.atomicMassBromine} value={"79.904"} />
      </Element>
      <Element elementStyle={styles.bariumElement}>
        <ElementItem itemStyle={styles.atomicNumberBarium} value={"56"} />
        <ElementItem itemStyle={styles.symbolBarium} value={"Ba"} />
        <ElementItem itemStyle={styles.nameBarium} value={"Barium"} />
        <ElementItem itemStyle={styles.atomicMassBarium} value={"137.327"} />
      </Element>
    </div>
  );
}

export default Loader;
