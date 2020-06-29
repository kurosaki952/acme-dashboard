//main.js module

import {drawCharts} from "./charts";

// load Visualization API and codechart package
google.charts.load('current',{'packages':['corechat']});

//set a callback to run when the google visualization api is loaded
google.charts.setOnLoadCallback(drawCharts);