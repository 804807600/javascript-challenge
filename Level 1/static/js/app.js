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
button.on("click", function () {
    tbody.html("");
    var inputElement = d3.select("#datetime")
    var inputValue = inputElement.property("value")
    var filter = tableData.filter(x => x.datetime === inputValue)
    table(filter)
    console.log(filter)
})



