// from data.js
var tableData = data;

//// Get a reference to the table body
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
// Append table function
function renderTable(d) {
    d.forEach(ufo => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

//return table when first load of the index.html
renderTable(tableData);

//Select the input element and get the raw HTML node
var datetimeInput = d3.select("#datetime");
var cityInput = d3.select("#city");
var stateInput = d3.select("#state");
var countryInput = d3.select("#country");
var shapeInput = d3.select("#shape");

button.on("click", function() {

// Select the input element and get the raw HTML node
    tbody.html("");
    // Initial filterdata
    var filterData = tableData;

    //Select datetime input 
    var datetimeInputValue = datetimeInput.property("value");
    console.log(datetimeInputValue);
    if (datetimeInputValue != ""){
      var filterData=filterData.filter(tableData => tableData.datetime === datetimeInputValue)
    };

    //Select city input 
    var cityInputValue = cityInput.property("value").toLowerCase();
    console.log(cityInputValue);
    if (cityInputValue != ""){
      var filterData=filterData.filter(tableData => tableData.city === cityInputValue)
    };

    //Select state input 
    var stateInputValue = stateInput.property("value").toLowerCase();
    console.log(stateInputValue);
    if (stateInputValue != ""){
      var filterData=filterData.filter(tableData => tableData.state === stateInputValue)
    };
    
    //Select country input
    var countryInputValue = countryInput.property("value").toLowerCase();
    console.log(countryInputValue);
    if (countryInputValue != ""){
      var filterData=filterData.filter(tableData => tableData.country === countryInputValue)
    };

    //Select shape input
    var shapeInputValue = shapeInput.property("value").toLowerCase();
    console.log(shapeInputValue);
    if (shapeInputValue != ""){
      var filterData=filterData.filter(tableData => tableData.shape === shapeInputValue)
    };

    //send filterdata to table function
    renderTable(filterData)
    });
      