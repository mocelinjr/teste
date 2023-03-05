anychart.onDocumentReady(function () {
    // create polar chart
    var chart = anychart.polar();

    // create data set on our data
    chartData = {
        rows: [
            ['Jan', 14229],
            ['Feb', 8814, 5067, 13987, 3932],
            ['Mar', 11624, 7004, 3574, 5221],
            ['Apr', 8814, 9054, 4376, 5256],
            ['May', 9998, 5043, 4572, 3308],
            ['Jun', 12321, 15067, 3417, 5432],
            ['Jul', 10342, 10119, 9231, 9701],
            ['Aug', 4814, 3054, 4376, 4229],
            ['Sep', 8814, 5067, 3987, 3932],
            ['Oct', 11624, 17004, 3574, 5221],
            ['Nov', 8814, 9054, 4376, 9256],
            ['Dec', 12998, 8814, 4572, 3308]
        ]
    };

    // sort data by X
    chart.sortPointsByX(true)
    // set series type
        .defaultSeriesType('column')
        // disable y-axis
        .yAxis(false)
        // set x-scale
        .xScale('ordinal');

    // set chart data
    chart.data(chartData);
    chart.xGrid(false);
    chart.yGrid(false);

    // set stack mod
    chart.yScale().stackMode('value');

    // set chart container id
    chart.container('container');
    // initiate chart drawing
    chart.draw();
});
