// Toggle the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

// Chart.js initialization
var ctxOverview = document.getElementById('overviewChart').getContext('2d');
var overviewChart = new Chart(ctxOverview, {
    type: 'bar',
    data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'],
        datasets: [{
            label: 'Total Carbon Credits Traded',
            data: [12, 19, 10, 15, 12, 13,23,15,10,20,20,23],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'right',
            },
            tooltip: {
                mode: 'index',
                intersect: false
            },
            '3d': {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        }
    }
});

var ctxCompliance = document.getElementById('complianceChart').getContext('2d');
var complianceChart = new Chart(ctxCompliance, {
    type: 'pie',
    data: {
        labels: ['Verified', 'Non-Verified'],
        datasets: [{
            label: 'Compliance Status',
            data: [80, 20],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right',
            },
            tooltip: {
                mode: 'index',
                intersect: false
            },
            '3d': {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        }
    }
});

var ctxTransactions = document.getElementById('transactionsChart').getContext('2d');
var transactionsChart = new Chart(ctxTransactions, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Transactions',
            data: [10, 15, 20, 25, 30, 40],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'right',
            },
            tooltip: {
                mode: 'index',
                intersect: false
            },
            '3d': {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        }
    }
});

var ctxImpact = document.getElementById('impactChart').getContext('2d');
var impactChart = new Chart(ctxImpact, {
    type: 'doughnut',
    data: {
        labels: ['Project A', 'Project B', 'Project C'],
        datasets: [{
            label: 'Environmental Impact',
            data: [10, 20, 30],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right',
            },
            tooltip: {
                mode: 'index',
                intersect: false
            },
            '3d': {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        }
    }
});
