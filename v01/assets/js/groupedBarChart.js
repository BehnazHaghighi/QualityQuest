var ctx = document.getElementById('groupedBarChart').getContext('2d');
        var groupedBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Red',
                        data: [12, 19, 3, 5, 2, 3, 7],
                        backgroundColor: '#394fd6',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Blue',
                        data: [10, 14, 5, 8, 1, 6, 4],
                        backgroundColor: '#b82015',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Yellow',
                        data: [8, 13, 7, 3, 9, 2, 6],
                        backgroundColor: '#d58919',
                        borderColor: 'rgba(255, 206, 86, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });