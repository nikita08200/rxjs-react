import React, { useState, useEffect } from "react";
import styles from "./dashboard.module.scss";

import dataObservable from "../../observables/DataObservable";

import DashboardCard from "../Dashboard/DashboardCard";

const getNameByPropName = (propName) => {
  switch (propName) {
    case "temperature":
      return "Temperature";

    case "airPressure":
      return "Air pressure";

    case "humidity":
      return "Humidity";

    default:
      return "";
  }
};

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    dataObservable.subscribe({
      next(data) {
        const transformedData = Object.entries(data).map(([key, value]) => ({
          name: getNameByPropName(key),
          key: getNameByPropName(key),
          value: !isNaN(value) ? value.toFixed(2) : value,
        }));

        setData(transformedData);
      },
      error(err) {
        console.error("something wrong occurred: " + err);
      },
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.cards}>
        {!data.length && (
          <div className={styles.calculating}>Calculating...</div>
        )}
        {data.map(({ name, value, key }) => {
          return <DashboardCard key={key} name={name} value={value} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
