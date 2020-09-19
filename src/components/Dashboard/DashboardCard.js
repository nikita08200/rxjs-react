import React from "react";
import styles from "./dashboard.module.scss";

const DashboardCard = ({ name, value }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardName}>{name}</div>
      <div className={styles.cardValue}>{value}</div>
    </div>
  );
};

export default DashboardCard;
