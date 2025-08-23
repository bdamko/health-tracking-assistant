// script.js
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('bpChart').getContext('2d');
    const bpChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [
                {
                    label: 'Systolic',
                    data: [110, 105, 100, 95, 90, 85, 80],
                    borderColor: '#FF4500',
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'Diastolic',
                    data: [75, 72, 70, 68, 65, 72, 70],
                    borderColor: '#FFA500',
                    tension: 0.4,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    min: 40,
                    max: 120
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});