var ctx = document.getElementById('waveChart').getContext('2d');
var waveChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({length: 360}, (_, i) => i),
        datasets: [
            {
                label: 'Sales',
                data: Array.from({length: 360}, (_, i) => Math.sin(i * Math.PI / 180)),
                borderColor: '#2956ef',
                fill: false,
            },
            {
                label: 'Cost',
                data: Array.from({length: 360}, (_, i) => Math.sin((i * Math.PI / 180) + Math.PI / 2)),
                borderColor: '#85f4ff',
                fill: false,
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Degrees'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Amplitude'
                },
                min: -2,
                max: 2
            }
        }
    }
});

// ------------------------------------------

// Data for the Doughnut Chart
const doughnutData = {
    labels: ['Fashion 251K', 'Accessories 176K'],
    datasets: [{
        label: 'Earnings',
        data: [60, 40],
        backgroundColor: ['#375eea', '#8cf5fb'],
        hoverOffset: 4
    }]
};

// Configuration for the Doughnut Chart
const doughnutConfig = {
    type: 'doughnut',
    data: doughnutData,
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
};

// Render the Doughnut Chart
const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
new Chart(doughnutCtx, doughnutConfig);

// Data for the Bar Chart
const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [{
        label: 'Conversions',
        data: [12, 19, 3, 5, 2, 3, 7, 10, 15, 13],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Configuration for the Bar Chart
const barConfig = {
    type: 'bar',
    data: barData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
};

// Render the Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, barConfig);
