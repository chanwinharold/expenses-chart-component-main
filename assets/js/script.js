// import {Chart} from "chart.js/auto";

const canva = document.getElementById("myChart")


fetch("../../data.json").then((response) => response.json()).then((data) => {
    console.log(data)

    // new Chart (
    //     canva,
    //     {
    //         type: 'bar',
    //         data: {
    //             labels: data.day,
    //             datasets: [
    //                 {
    //                     data: data.amount
    //                 }
    //             ]
    //         }
    //     }
    // )
})
