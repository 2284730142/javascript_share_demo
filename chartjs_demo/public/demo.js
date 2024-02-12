// set a random number
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

// add a self chart tpye 'customLine'
class CustomLineController extends Chart.controllers.line {
    draw() {
        super.draw();
        console.log(`draw custom line`);
    }
}
CustomLineController.id = 'customLine';
CustomLineController.defaults = {...Chart.controllers.line.defaults};

// register the custom chart type
Chart.register(CustomLineController);

// add a custom plugin
const customTextPlugin = {
    id: 'customTextPlugin',
    afterDraw: (chart, args, options) => {
        const ctx = chart.ctx;
        const chartArea = chart.chartArea;
        ctx.save();
        ctx.font = options.font || '18px Arial';
        ctx.fillStyle = options.color || 'grey';
        ctx.textAlign = 'center';
        ctx.fillText(options.text || 'Custom Text', chartArea.left + 30, chartArea.top - 20);
        ctx.restore();
    }
}

// register the custom plugin
Chart.register(customTextPlugin);

// set a config for the chart
const config = {
    type: 'customLine',
    data: {
        labels: [customTextPlugin],
        datasets: [{
            label: 'Random data',
            backgroundColor: 'rgb(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132, 1)',
            // add an empty array to the data property
            data: [],
            fill: false,
            yAxisID: 'y-axis-1',
        }, {
            label: 'Another Random data',
            backgroundColor: 'rgb(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235, 1)',
            // add an empty array to the data property
            data: [],
            fill: false,
            yAxisID: 'y-axis-2',
        }]
    },
    options: {
        plugins: {
            customTextPlugin: {
                text: 'Custom Text',
                font: '14px Arial',
                color: 'blue'
            }
        },
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            'y-axis-1': {
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-axis-1',
                title: {
                    display: true,
                    text: 'Value'
                }
            },
            'y-axis-2': {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'y-axis-2',
                gridLines: {
                    drawOnChartArea: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Another Value'
                }
            }
        }
    }
};

// add a click event
function onPointClick(evt, array) {
    if (array.length > 0) {
        const activePoint = array[0];
        console.log(`activePoint`, activePoint);
        const datasetIndex = activePoint.datasetIndex;
        const index = activePoint.index;
        console.log(`click dataset:`, datasetIndex, `index:`, index);
        const data = myChart.data.datasets[datasetIndex].data[index];
        console.log(`click point: x - ${myChart.data.labels[index]}, y - ${data}`);
    }
}

// add event to the chart
config.options.onClick = onPointClick;

// add responsive option
// config.options.responsive = true;
// config.options.maintainAspectRatio = false;

// add tooltip and legend options
config.options.plugins.tooltip = {
    enabled: true,
    mode: 'index',
    intersect: false,
    callbacks: {
        label: (tooltipItem, data) => {
            let label = tooltipItem.dataset.label || '';
            if (label) {
                label += ': ';
            }
            label += tooltipItem.parsed.y.toFixed(2);
            return label;
        }
    }
};
config.options.plugins.legend = {
    display: true,
    position: 'top',
    labels: {
        color: 'rgb(255, 99, 132)',
        font: {
            size: 14,
        },
        usePointStyle: true,
    }
};

// create a new chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, config);

// add data to the chart
function addData(chart, label, data1, data2) {
    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(data1);
    chart.data.datasets[1].data.push(data2 || getRandomNumber());
    chart.update();
}

// update the chart every second
setInterval(() => {
    const newData1 = getRandomNumber();
    const newData2 = getRandomNumber();
    const newLabel = new Date().toLocaleTimeString();
    addData(myChart, newLabel, newData1, newData2);

    if (myChart.data.labels.length > 10) {
        myChart.data.labels.shift();
        myChart.data.datasets.forEach((dataset) => {
            dataset.data.shift();
        });
    }

    // add linergadient to the chart
    const chartArea = myChart.chartArea;
    if (chartArea) {
        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, 'rgba(255, 99, 132, 0.2)');
        gradient.addColorStop(1, 'rgba(255, 99, 132, 0.8)');

        myChart.data.datasets[0].backgroundColor = gradient;
        myChart.data.datasets[0].borderColor = gradient;
    }

    myChart.update();
}, 2000);