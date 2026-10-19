
var motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

var result = {};

motoGP.forEach(function (event) {
    var country = event.winner.country;

    if (!result[country]) {
        result[country] = {
            winningCircuits: [],
            totalWin: 0
        };
    }

    result[country].winningCircuits.push({
        name: event.winner.firstName + ' ' + event.winner.lastName,
        winLocation: event.circuit + ', ' + event.location
    });

    result[country].totalWin++;
});

console.log(JSON.stringify(result, null, 2));
