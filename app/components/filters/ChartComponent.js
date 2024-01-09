import React, { useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

const ChartComponent = ({ labels, datasets }) => {
  Chart.register(...registerables);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: datasets,
  });

  useEffect(() => {
    setChartData((prevChartData) => ({
      ...prevChartData,
      labels: labels,
    }));
  }, [labels]);

  return (
    <Line
      data={chartData}
      options={{
        scales: {
          x: {
            type: "category",
            labels: labels,
          },
          y: {
            beginAtZero: true,
          },
        },
      }}
    />
  );
};

export default ChartComponent;
