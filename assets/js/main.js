// Light and Dark Mode Button
const btnLightMode = document.querySelector(".btn-lightMode");
const btnDarkMode = document.querySelector(".btn-darkMode");

btnLightMode.addEventListener("click", () => {
  btnLightMode.classList.remove("active");
  btnLightMode.classList.add("active");
  btnDarkMode.classList.remove("active");
});
btnDarkMode.addEventListener("click", () => {
  btnDarkMode.classList.remove("active");
  btnDarkMode.classList.add("active");
  btnLightMode.classList.remove("active");
});

//Charts.JS
//GRAPH 1
const graphSales = document.getElementById("graph-sales").getContext("2d");
const myChart1 = new Chart(graphSales, {
  type: "doughnut",
  data: {
    labels: ["Sales", "Goal"],
    datasets: [
      {
        label: "",
        data: [81, 19],
        backgroundColor: ["#7380ec", "#FFFFFF"],
        borderColor: ["#FFFFFF", "#FFFFFF"],
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
  },
});

//GRAPH 2
const graphExpenses = document
  .getElementById("graph-expenses")
  .getContext("2d");
const myChart2 = new Chart(graphExpenses, {
  type: "doughnut",
  data: {
    labels: ["Expenses", "Goal"],
    datasets: [
      {
        label: "",
        data: [62, 38],
        backgroundColor: ["#7380ec", "#FFFFFF"],
        borderColor: ["#FFFFFF", "#FFFFFF"],
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
  },
});

//GRAPH 3
const graphIncome = document.getElementById("graph-income").getContext("2d");
const myChart3 = new Chart(graphIncome, {
  type: "doughnut",
  data: {
    labels: ["Income", "Goal"],
    datasets: [
      {
        label: "",
        data: [44, 56],
        backgroundColor: ["#7380ec", "#FFFFFF"],
        borderColor: ["#FFFFFF", "#FFFFFF"],
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
  },
});
