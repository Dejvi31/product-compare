import React, { useRef } from "react";
import { Chart, registerables } from "chart.js";
import { Radar } from "react-chartjs-2";

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);
  Chart.register(...registerables);

  return <Radar ref={chartRef} data={data} />;
};

export default ChartComponent;
