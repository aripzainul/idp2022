// $(function () {
//   var radarChartData = {
//     labels: [
//       "Integrity",
//       "Creative Innovative",
//       "Drive to Execellence",
//       "Caring",
//       "Continuous Learning",
//       "Persistent",
//       "Strategic Thinking",
//       "Decision Making",
//       "Change Management",
//       "Managing Team",
//       "Developing Team",
//     ],
//     datasets: [
//       {
//         label: "Required Score",
//         data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//         fill: true,
//         backgroundColor: "rgba(255, 99, 132, 0.2)",
//         borderColor: "rgb(239, 83, 80)",
//         pointBackgroundColor: "rgb(239, 83, 80)",
//         pointBorderColor: "#fff",
//         pointHoverBackgroundColor: "#fff",
//         pointHoverBorderColor: "rgb(239, 83, 80)",
//       },
//       {
//         label: "Individual Score",
//         data: [3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3],
//         fill: true,
//         backgroundColor: "rgba(54, 162, 235, 0.2)",
//         borderColor: "rgb(57, 139, 247)",
//         pointBackgroundColor: "rgb(57, 139, 247)",
//         pointBorderColor: "#fff",
//         pointHoverBackgroundColor: "#fff",
//         pointHoverBorderColor: "rgb(57, 139, 247)",
//       },
//     ],
//   };

//   var radarChartOptions = {
//     elements: {
//       line: {
//         tension: 0,
//         borderWidth: 3,
//       },
//     },
//   };

//   if ($("#radarChart").length) {
//     var radarChartCanvas = $("#radarChart").get(0).getContext("2d");
//     var radarChart = new Chart(radarChartCanvas, {
//       type: "radar",
//       data: radarChartData,
//       options: radarChartOptions,
//     });
//   }
// });

var marksCanvas1 = document.getElementById("radarBehaviour");

var marksData = {
  labels: [
    "Integrity",
    "Creative Innovative",
    "Drive to Execellence",
    "Caring",
    "Continuous Learning",
    "Persistent",
    "Strategic Thinking",
    "Decision Making",
    "Change Management",
    "Managing Team",
    "Developing Team",
  ],
  datasets: [
    {
      label: "Requirement Score",
      data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(57, 139, 247)",
      pointBackgroundColor: "rgb(57, 139, 247)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(57, 139, 247)",
    },
    {
      label: "Individual Score",
      data: [2, 3, 4, 3, 4, 4, 3, 3, 5, 3, 3],
      fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(239, 83, 80)",
        pointBackgroundColor: "rgb(239, 83, 80)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(239, 83, 80)",
    },
  ],
};

var chartOptions = {
  scale: {
    ticks: {
      beginAtZero: true,
      min: 0,
      max: 5,
      stepSize: 1,
    },
  },
};

var radarChart = new Chart(marksCanvas1, {
  type: "radar",
  data: marksData,
  options: chartOptions,
});


var marksCanvas2 = document.getElementById("radarFunctional");

var marksData = {
  labels: [
    "Functional1",
    "Functional2",
    "Functional3",
    "Functional4",
    "Functional5",
  ],
  datasets: [
    {
      label: "Requirement Score",
      data: [3,3,3,3,3],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(57, 139, 247)",
      pointBackgroundColor: "rgb(57, 139, 247)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(57, 139, 247)",
    },
    {
      label: "Individual Score",
      data: [2,3,2,1,3],
      fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(239, 83, 80)",
        pointBackgroundColor: "rgb(239, 83, 80)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(239, 83, 80)",
    },
  ],
};

var chartOptions = {
  scale: {
    ticks: {
      beginAtZero: true,
      min: 0,
      max: 5,
      stepSize: 1,
    },
  },
};

var radarChart = new Chart(marksCanvas2, {
  type: "radar",
  data: marksData,
  options: chartOptions,
});
