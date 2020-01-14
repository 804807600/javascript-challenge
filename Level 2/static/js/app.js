// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")

function table(x) {
    x.forEach(data => {
        var row = tbody.append("tr")
        Object.entries(data).forEach(([key, value]) => {
            var cell = row.append("td")
            cell.text(value)
        })
    })
}
table(tableData)

var button = d3.select("#filter-btn")
var datetimeinput = d3.select("#datetime")
var cityinput = d3.select("#city")
var stateinput = d3.select("#state")
var countryinput = d3.select("#country")
var shapeinput = d3.select("#shape")
button.on("click", function () {
    tbody.html("")
    var datetimeValue = datetimeinput.property("value")
    filter = tableData
    if (datetimeValue != "") {

        var filter = tableData.filter(x => x.datetime === datetimeValue)

    }
    var cityValue = cityinput.property("value")

    if (cityValue != "") {

        var filter = tableData.filter(x => x.city === cityValue)

    }
    var stateValue = stateinput.property("value")
    if (stateValue != "") {

        var filter = tableData.filter(x => x.state === stateValue)

    }
    var countryValue = countryinput.property("value")
    if (countryValue != "") {

        var filter = tableData.filter(x => x.country === countryValue)

    }
    var shapeValue = shapeinput.property("value")
    if (shapeValue != "") {

        var filter = tableData.filter(x => x.shape === shapeValue)

    }

    table(filter)

})

