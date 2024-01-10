import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

const ChartComponent = ({ labels, datasets }) => {
  const chartRef = useRef(null);
  Chart.register(...registerables);

  useEffect(() => {
    if (chartRef.current && chartRef.current.chartInstance) {
      const chart = chartRef.current.chartInstance;
      chart.data.labels = labels;
      chart.data.datasets = datasets;
      chart.update();
    }
  }, [labels, datasets]);

  return (
    <Line
      ref={chartRef}
      data={{
        labels: labels,
        datasets: datasets,
      }}
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
