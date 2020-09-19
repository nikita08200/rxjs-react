import React from "react";
import dataObservable from "../../observables/DataObservable";
import DashboardCard from "../Dashboard/DashboardCard";

import styles from "./dashboard.module.scss";

const data = [
  {
    name: "Temperature",
    value: 10,
    key: 1,
  },
  {
    name: "Air pressure",
    value: 10,
    key: 2,
  },
  {
    name: "Humidity",
    value: 10,
    key: 3,
  },
];

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cards}>
        {data.map(({ name, value, key }) => {
          return <DashboardCard key={key} name={name} value={value} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
