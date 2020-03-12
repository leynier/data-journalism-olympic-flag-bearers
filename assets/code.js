$.getJSON('assets/olympic_games.json', (json) => {
    percents = []
    years = Object.keys(json);
    years.forEach(year => {
        let womens = json[year]['womens'];
        let total = json[year]['womens'] + json[year]['mens']
        percents.push((womens/total)*100);
    });
});

var chart = c3.generate({
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ]
    }
});