// import { useEffect } from "react";
// import styles from "../css/tableRowTitle.module.css";

// // function TableRowTitle({ period }) {
// //   const [prevPeriod, setPrevPeriod] = useState(period);
// //   const [periodNumber, setPeriodNumber] = useState(period);
// //   const periodArray = [];

// //   console.log(prevPeriod, periodNumber);

// //   useEffect(() => {
// //     setPrevPeriod(period);
// //     setPeriodNumber(period);
// //   }, [period]);

// //   return (
// //     <div className={styles.title}>
// //       {prevPeriod === periodNumber ? <h3>Period {period}</h3> : ""}
// //     </div>
// //   );
// // }

// // export default TableRowTitle;

// // function TableRowTitle({ period }) {
// //   const [prevPeriods, setPrevPeriods] = useState([period]);

// //   console.log(prevPeriods);

// //   useEffect(() => {
// //     setPrevPeriods([period]);
// //   }, [period]);

// //   const isDuplicate = prevPeriods.reduce(
// //     (acc, val) => acc || val === period,
// //     false
// //   );

// //   console.log(isDuplicate);

// //   return (
// //     <div className={styles.title}>
// //       {isDuplicate ? <h3>Period {period}</h3> : ""}
// //     </div>
// //   );
// // }

// // export default TableRowTitle;

// // function TableRowTitle({ period }) {

// //   console.log(periodArray);

// //   return (
// //     <div className={styles.title}>
// //       <h3>Period {period}</h3>
// //     </div>
// //   );
// // }

// // export default TableRowTitle;
