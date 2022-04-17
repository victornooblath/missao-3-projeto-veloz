
const charts = document.querySelectorAll(".chart");

charts.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Adriano", "Bruno", "Carlos", "Daniel", "Flávia", "Gabirel", "Laís"],
      datasets: [
        {
          label: "Nota Av1",
          data: [9.00, 7.00 , 5.75, 3.50, 8.50, 9.00, 5.50],
          backgroundColor: [
            "rgba(255, 99, 132)",
            "rgba(54, 162, 235)",
            "rgba(255, 206, 86)",
            "rgba(75, 192, 192)",
            "rgba(153, 102, 255)",
            "rgba(255, 159, 64)",
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
        {
          label: "Nota Av2",
          data: [8.00, 6.50, 8.00, 10.00, 8.50, 7.50, 7.00],
          backgroundColor: [
            "rgba(255, 99, 132)",
            "rgba(54, 162, 235)",
            "rgba(255, 206, 86)",
            "rgba(75, 192, 192)",
            "rgba(153, 102, 255)",
            "rgba(255, 159, 64)",
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
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});


const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Av1", "Av2"],
      datasets: [
        {
          label: "Média",
          data: [6.89,7.93],
          backgroundColor: [
            "rgba(255, 99, 132)",
            "rgba(54, 162, 235)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },
        
      ],
    },
    
    
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('myChartPie');
const myChartPie = new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: ["Av1", "Av2"],
      datasets: [{
        label: 'My First Dataset',
        data: [4, 6],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
        ],
        hoverOffset: 4
      },
    ]
    },
    
    
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx3 = document.getElementById('myChartPie2');
const myChartPie2 = new Chart(ctx3, {
    type: 'pie',
    data: {
      labels: ["Av1", "Av2"],
      datasets: [{
        label: 'My First Dataset',
        data: [3, 1],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
        ],
        hoverOffset: 4
      },
    ]
    },
    
    
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
