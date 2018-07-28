
// Create the Traces
var trace1 = {
  x: data.ffood_per,
  y: data.obese_rate,
  mode: "markers",
  type: "scatter",
  text: ['Alabama',  'Alaska',  'Arizona',  'Arkansas',  'California',  'Colorado',  'Connecticut',  'Delaware',  'District of Columbia',  
  'Florida',  'Georgia',  'Hawaii',  'Idaho',  'Illinois',  'Indiana',  'Iowa',  'Kansas',  'Kentucky',  'Louisiana',  'Maine',
  'Maryland',  'Massachusetts',  'Michigan',  'Minnesota',  'Mississippi',  'Missouri',  'Montana',  'Nebraska',  'Nevada',  
  'New Hampshire',  'New Jersey',  'New Mexico',  'New York',  'North Carolina',  'North Dakota',  'Ohio',  'Oklahoma',  'Oregon',  
  'Pennsylvania',  'Rhode Island',  'South Carolina',  'South Dakota',  'Tennessee',  'Texas',  'Utah',  'Vermont',  'Virginia',  
  'Washington',  'West Virginia',  'Wisconsin',  'Wyoming'],
    marker: {
    color: "#2077b4",
    symbol: "hexagram"
  }
};

// Create the data array for the plot
var data = [trace1];

// Define the plot layout
var layout = {
  title: "Fast Food and Obesity",
  xaxis: { title: "Fast Food per 1000" },
  yaxis: { title: "Obesity Rate" }
};

// Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", data, layout);
