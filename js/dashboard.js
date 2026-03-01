/**
 * dashboard.js
 * Renders Chart.js charts for the dashboard page.
 */

document.addEventListener('DOMContentLoaded', () => {

    // Common Chart Defaults for Global Theme
    Chart.defaults.color = '#c0b298'; // text-muted (antique grey)
    Chart.defaults.borderColor = 'rgba(212, 175, 55, 0.1)'; // faint gold border
    Chart.defaults.font.family = "'Crimson Text', serif";

    // 1. Activity Line Chart
    const ctxActivity = document.getElementById('activityChart').getContext('2d');

    // Gradient for Line Chart
    let gradient = ctxActivity.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(212, 175, 55, 0.5)'); // Gold with opacity
    gradient.addColorStop(1, 'rgba(212, 175, 55, 0.0)');

    new Chart(ctxActivity, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Contributions',
                data: [12, 19, 3, 5, 2, 3, 20, 35, 40, 25, 45, 50],
                borderColor: '#d4af37', // Gold Primary
                backgroundColor: gradient,
                fill: true,
                tension: 0.4, // Smooth curve
                pointBackgroundColor: '#f1c40f',
                pointBorderColor: '#fff',
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(10, 10, 15, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#f5f0e1',
                    borderColor: 'rgba(212, 175, 55, 0.3)',
                    borderWidth: 1
                }
            },
            scales: {
                y: { beginAtZero: true, grid: { borderDash: [5, 5] } },
                x: { grid: { display: false } }
            }
        }
    });

    // 2. Skill Radar Chart
    const ctxSkill = document.getElementById('skillChart').getContext('2d');
    new Chart(ctxSkill, {
        type: 'radar',
        data: {
            labels: ['Python', 'Statistics', 'Visualization', 'Cloud (Azure)', 'Deep Learning', 'SQL'],
            datasets: [{
                label: 'Proficiency',
                data: [95, 85, 90, 70, 75, 80],
                backgroundColor: 'rgba(212, 175, 55, 0.2)',
                borderColor: '#f1c40f',
                pointBackgroundColor: '#d4af37',
                pointBorderColor: '#fff',
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    pointLabels: {
                        color: '#f1f5f9',
                        font: { size: 12, weight: '600' }
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        color: 'transparent' // Hide numbers on axis
                    }
                }
            }
        }
    });

    // 3. Tech Stack Doughnut Chart
    const ctxTech = document.getElementById('techChart').getContext('2d');
    new Chart(ctxTech, {
        type: 'doughnut',
        data: {
            labels: ['Machine Learning', 'Data Analysis', 'Web Dev', 'Cloud Ops'],
            datasets: [{
                data: [40, 25, 20, 15],
                backgroundColor: [
                    '#d4af37', // Gold
                    '#f1c40f', // Bright Gold
                    '#740001', // Gryffindor Crimson
                    '#9e1b1b'  // Bright Crimson
                ],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#cbd5e1', padding: 20 }
                }
            },
            cutout: '70%',
        }
    });

});
