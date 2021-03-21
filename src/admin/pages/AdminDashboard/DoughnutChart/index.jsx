import Chart from "chart.js";
import React, { createRef, useEffect } from "react";

// const data = {
//   labels: ["Earnings", "No Earnings"],
//   datasets: [
//     {
//       label: "Name",
//       data: [430, 150],
//       backgroundColor: ["#62BC74", "#DAEEDF"],
//       // label: ["Earnings", "Blank"],
//       borderWidth: 0,
//       weight: 100,
//     },
//   ],

//   options: {
//     responsive: true,
//     legend: {
//       position: "top",
//       display: false,
//     },
//     animation: {
//       animateScale: true,
//       animateRotate: true,
//     },
//     cutoutPercentage: 65,
//     rotation: 31.4,
//   },

//   scales: {
//     xAxes: [
//       {
//         ticks: { display: false },
//         gridLines: {
//           display: false,
//           drawBorder: false,
//         },
//       },
//     ],
//     yAxes: [
//       {
//         ticks: { display: false },
//         gridLines: {
//           display: false,
//           drawBorder: false,
//         },
//       },
//     ],
//   },
// };

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => {
  const monthlyChartRef = createRef();

  useEffect(() => {
    const myChart = monthlyChartRef.current;

    new Chart(myChart, {
      type: "doughnut",
      data: {
        labels: ["Earnings", "No Earnings"],
        datasets: [
          {
            label: "Name",
            data: [430, 150],
            backgroundColor: ["#62BC74", "#DAEEDF"],
            // label: ["Earnings", "Blank"],
            borderWidth: 0,
            weight: 100,
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          position: "top",
          display: false,
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
        cutoutPercentage: 65,
        rotation: 31.4,
      },

      scales: {
        xAxes: [
          {
            ticks: { display: false },
            gridLines: {
              display: false,
              drawBorder: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: { display: false },
            gridLines: {
              display: false,
              drawBorder: false,
            },
          },
        ],
      },
    });
  }, []);

  return (
    <>
      {/* <Doughnut data={data} /> */}

      <canvas ref={monthlyChartRef} id="monthlyEarning"></canvas>
    </>
  );
};

export default DoughnutChart;
