var now = moment().endOf('day').toDate();
var yearAgo = moment().startOf('day').subtract(1, 'year').toDate();

var customLocale = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', '', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    No: 'No',
    on: 'on',
    Less: 'Less',
    More: 'More'
}

d3.json("data.json").then(function (chartData) {
// Convert all date strings to the date-objects
for (var i = 0; i < chartData.length; i += 1) {
    chartData[i].date = new Date(chartData[i].date)
}

// Customize the heatmap
var heatmap = calendarHeatmap()
    .locale(customLocale)
    .data(chartData)
    .selector('.container')
    .tooltipEnabled(false)
    .colorRange(['#ebedf0', '#f6c106'])
    .onClick(function (data) {
    console.log('data', data);
    });
heatmap();  // render the chart
});
