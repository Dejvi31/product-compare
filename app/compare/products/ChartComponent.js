// import React, { useEffect, useRef } from "react";
// import { Chart, registerables } from "chart.js";
// import { Radar } from "react-chartjs-2";

// const ChartComponent = ({ labels, datasets }) => {
//   const chartRef = useRef(null);
//   Chart.register(...registerables);

//   useEffect(() => {
//     if (chartRef.current && chartRef.current.chartInstance) {
//       const chart = chartRef.current.chartInstance;
//       chart.data.labels = labels;
//       chart.data.datasets = datasets;
//       chart.update();
//     }
//   }, [labels, datasets]);

//   return (
//     <Radar
//       ref={chartRef}
//       data={{
//         labels: labels,
//         datasets: datasets,
//       }}
//       options={{
//         scales: {
//           r: {
//             angleLines: {
//               display: true,
//               color: "rgba(255, 255, 255, 0.5)",
//             },
//             suggestedMax: 100,
//             pointLabels: {
//               color: "rgba(255, 255, 255, 0.8)",
//               fontSize: 12,
//             },
//             ticks: {
//               display: false,
//             },
//           },
//         },
//         elements: {
//           line: {
//             borderWidth: 3,
//             borderColor: "rgba(75,192,192,1)",
//             fill: true,
//             backgroundColor: "rgba(75,192,192,0.4)",
//             tension: 0.2,
//           },
//           point: {
//             radius: 5,
//             backgroundColor: "rgba(75,192,192,1)",
//             hoverRadius: 8,
//           },
//         },
//         plugins: {
//           legend: {
//             display: false,
//           },
//         },
//       }}
//     />
//   );
// };

// export default ChartComponent;

import React, { useRef } from "react";
import { Chart, registerables } from "chart.js";
import { Radar } from "react-chartjs-2";

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);
  Chart.register(...registerables);

  return <Radar ref={chartRef} data={data} />;
};

export default ChartComponent;
