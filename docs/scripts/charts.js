// charts. js Module
export {drawCharts}
//callback that creates and populates a data table,
// instantiates charts, passes in the data and draws
function drawCharts()
{
    drawpiechart()
    drawAxisTickColors()
}

function drawpiechart()
{
    //create the data table
    const data= new google.visualization.DataTable();
    data.addColumn('string','Project Type');
    data.addColumn('number','Thousands of Requests');
    data.addRows([
            ['Automation',3],['Event Processing',1],['Geofencing',1],['Internet of Things',2]
        ]);
    // set chart options
    const options ={
        'title': 'Requests by Project Type',
        'width': 500,
        'height': 300
    };

    // Instantiate and draw the pie chart , passing in specified options
    var chart = new google.visualization.PieChart(document.getElementById('pie_div'));
    chart.draw(data,options);


    //redraw chart on window resize
    $(window).resize(function(){
        chart.draw(data,options);
    })

}

function drawAxisTickColors()
{
//create the data table
    const data = google.visualization.arrayToDataTable
    ([
        ['City', '2020 Population', '2010 Population'],
        ['New York City,NY', 8175000, 8008000],
        ['Los Angeles,CA', 3792000, 3694000],
        ['Chicago,IL', 2695000, 2896000],
        ['Houston,TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000]
    ]);

    //set chart options
    const options =
        {
            title: 'Population of Largest U.S Cities',
            chartArea: {width: '50%'},
            hAxis: {
                title: 'Total Population',
                minValue: 0,
                textStyle: {
                    bold: true,
                    fontSize: 12,
                    color: '#4d4d4d'
                },
                titleTextStyle:
                    {
                    bold: true,
                    fontSize: 18,
                    color: '#4d4d4d'
                }
            },
            vAxis:
                {
                    title: 'city',
                    textstyle: {
                        fontSize: 14,
                        bold: true,
                        color: '#848484'
                    },
                    titleTextStyle: {
                        fontsize: 14,
                        bold: true,
                        color: '#848484'
                    }
             }
        };

//instantiate and draw the Axis Tick Chart, passing in specified options
    const chart=google.visualization.BarChart(document.getElementById('axis_div_tick_div'));
    chart.draw(data, options);

    //Redraw chart on windows resize:

    $(window).resize(function () {
        chart.draw(data, options);
    });
}