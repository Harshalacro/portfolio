/**
 * dashboard.js
 * Renders Chart.js charts for the dashboard page.
 */

document.addEventListener('DOMContentLoaded', () => {

    // Common Chart Defaults for Global Theme
    Chart.defaults.color = '#94a3b8'; // text-muted
    Chart.defaults.borderColor = 'rgba(59, 130, 246, 0.1)'; // faint border
    Chart.defaults.font.family = "'Inter', sans-serif";

    // 1. Activity Line Chart
    const ctxActivity = document.getElementById('activityChart').getContext('2d');

    // Gradient for Line Chart
    let gradient = ctxActivity.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(37, 99, 235, 0.5)'); // Primary with opacity
    gradient.addColorStop(1, 'rgba(37, 99, 235, 0.0)');

    new Chart(ctxActivity, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Contributions',
                data: [12, 19, 3, 5, 2, 3, 20, 35, 40, 25, 45, 50],
                borderColor: '#2563eb', // Primary Blue
                backgroundColor: gradient,
                fill: true,
                tension: 0.4, // Smooth curve
                pointBackgroundColor: '#0ea5e9',
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
                    backgroundColor: 'rgba(5, 10, 20, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#cbd5e1',
                    borderColor: 'rgba(59, 130, 246, 0.3)',
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
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                borderColor: '#0ea5e9',
                pointBackgroundColor: '#0ea5e9',
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
                    '#2563eb', // Blue
                    '#0ea5e9', // Sky
                    '#6366f1', // Indigo
                    '#1e293b'  // Slate (Dark)
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
