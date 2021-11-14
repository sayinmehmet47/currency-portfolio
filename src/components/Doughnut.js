import axios from "axios";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

export default function DoughnutChart() {
  const portfolioData = useSelector((state) => state.portfolioData);
  const [rateUSD, setRateUSD] = useState("");

  useEffect(() => {
    axios.get(`https://api.exchangerate.host/latest?base=USD`).then((res) => {
      setRateUSD(res.data.rates);
    });
  }, []);

  const portfolioToUsd = portfolioData.map((e) => {
    return Number.parseFloat(e.totalAsset / rateUSD[e.acronym]).toFixed(2);
  });
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: portfolioToUsd,
        backgroundColor: [
          "#1abc9c",
          "#3498db",
          "#9b59b6",
          "#e67e22",
          "#bdc3c7",
          "#FD7272",
          "#BDC581",
          "#B33771",
        ],
        borderColor: [
          "#1abc9c",
          "#3498db",
          "#9b59b6",
          "#e67e22",
          "#bdc3c7",
          "#FD7272",
          "#BDC581",
          "#B33771",
        ],
        borderWidth: 1,
      },
    ],
  };
  data.labels = portfolioData.map((e) => e.acronym);
  return (
    <div
      style={{
        maxWidth: 250,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
      }}
    >
      <div className="header">
        <h3 className="title">Portfolio Chart</h3>
      </div>
      <Doughnut data={data} />
    </div>
  );
}
