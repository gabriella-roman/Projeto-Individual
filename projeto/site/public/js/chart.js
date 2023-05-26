   /* GRAFICOOOOOOOOOOOOOOOOo */
   var dado = [] 

   const labels = [
    '1',
    '2',
    '3',
    '4',
    '5'
];

const grafico = document.getElementById('grafico');

const data = {
    labels: labels,
    datasets: [{
        label: 'USUÁRIOS',
        data: dado,
        backgroundColor: '#030D23',
        borderColor: '#030D23',
        borderWidth: 2
    }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        maintainAspectRatio: false,

        scales: {
            y: {
                ticks: {
                    beginAtZero: true,
                    color: 'white',
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 100
                    }
                },
            },
            x: {
                ticks: {
                    color: 'white',
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 500
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                color: 'white',
                font: {
                    size: 18,
                    family: 'Montserrat Ace',
                    weight: 800
                }
            }, legend: {
                labels: {
                    color: 'white',
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 500
                    }
                }
            }
        }
    }
};

const grafico_1 = new Chart(grafico, config);