$.getJSON('assets/olympic_games.json', (json) => {
    console.log(json);
});

var chart = c3.generate({
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ]
    }
});