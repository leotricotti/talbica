import styles from "./cardBody.module.css";

function Title({ title }) {
  return <h3 className={styles.cardBodyTitle}>{title}</h3>;
}

function Property({ dataFromApi, title }) {
  return (
    <div className={styles.propertyItems}>
      <span className={styles.propertyTitle}>{title}</span>
      <span className={styles.propertyValue}>{dataFromApi}</span>
    </div>
  );
}

function PropertySymbol({ dataFromApi, title, symbol }) {
  return (
    <div className={styles.propertyItems}>
      <span className={styles.propertyTitle}>{title}</span>
      <span className={styles.propertySymbol}>{symbol}</span>
      <span className={styles.propertyValue}>{dataFromApi}</span>
    </div>
  );
}

function CardBody({ dataFromApi }) {
  const capitalizeChemicalCategory = dataFromApi.groupBlock.replace(
    /(^\w{1})|(\s+\w{1})/g,
    (letter) => letter.toUpperCase()
  );

  return (
    <div key={dataFromApi.atomicNumber} className={styles.carBodyContainer}>
      <Title title={"Summary"} />
      <Property title={"Symbol"} dataFromApi={dataFromApi.symbol} />
      <Property title={"Name"} dataFromApi={dataFromApi.name} />
      <Property
        title={"Chemical category"}
        dataFromApi={capitalizeChemicalCategory}
      />
      <PropertySymbol
        title={"Atomic number"}
        dataFromApi={dataFromApi.atomicNumber}
        symbol={"Z"}
      />
      <PropertySymbol
        title={"Boiling point"}
        dataFromApi={dataFromApi.boilingPoint}
        symbol={"F°"}
      />
      <Property title={"Period"} dataFromApi={dataFromApi.period} />
      <Property title={"Group"} dataFromApi={dataFromApi.group} />
      <Property title={"Block"} dataFromApi={dataFromApi.block} />
      <Property
        title={"Oxidation states"}
        dataFromApi={dataFromApi.oxidationStates}
      />
      <Property
        title={"Year discovered"}
        dataFromApi={dataFromApi.yearDiscovered}
      />
    </div>
  );
}

export default CardBody;
