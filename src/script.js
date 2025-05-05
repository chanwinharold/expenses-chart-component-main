import Chart from 'chart.js/auto'

const data = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
];

new Chart(
    document.getElementById("myChart"),
    {
      type: 'bar',
      data: {
        labels: data.map((e) => e.day),
        datasets: [
          {
            data: data.map((e) => e.amount),
            backgroundColor: [
              'hsl(10, 79%, 65%)',
              'hsl(10, 79%, 65%)',
              'hsl(186, 34%, 65%)',
              'hsl(10, 79%, 65%)',
              'hsl(10, 79%, 65%)',
              'hsl(10, 79%, 65%)',
              'hsl(10, 79%, 65%)',
            ],
            borderRadius: [
              4, 4, 4, 4, 4, 4, 4
            ]
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            display: false,
            grid: {
              display: false
            }
          }
        }
      }
    }
)