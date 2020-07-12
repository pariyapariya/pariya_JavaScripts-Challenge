// from data.js
var tableData = data;
// Select the button
var filterButton = d3.selectAll("#filter-btn");
// Create event handlers
// button.on("click", a);
filterButton.on("click", runEnter);
// *************** Filter by 'date/time' ***************
// *****************************************************
// The event handler function for the form
function runEnter() {
    // prevent the form from refreshing the page
    d3.event.preventDefault() 
    // Select input element 
    var inputElement = d3.select("#datetime");
    // Get the value of input element
    var inputValue = inputElement.property("value");
    // console.log(inputElement);
    // console.log(inputValue);

    // Use filter() to filter only the user-input dates -- in input field
    var filteredDate = tableData.filter(d => d.datetime == inputValue);
    // console.log(filterTable);

    // Get a reference to the table body
    var tbody = d3.select("tbody");

    // Create table and populate data only on 'input date'
    filteredDate.forEach((d) => {
        var row = tbody.append("tr");
        Object.entries(d).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// *************** Filter by 'city' ********************
// *****************************************************
// The event handler function for the form
function runEnter() {
    // Select input element 
    var inputElement = d3.select("#city");
    // Get the value of input element
    var inputValue = inputElement.property("value");
    // console.log(inputElement);
    // console.log(inputValue);

    // Use filter() to filter only the user-input dates -- in input field
    var filteredCity = tableData.filter(c => c.city == inputValue);
    // console.log(filterTable);

    // Get a reference to the table body
    var tbody = d3.select("tbody");

    // Create table and populate data only on 'input date'
    filteredCity.forEach((c) => {
        var row = tbody.append("tr");
        Object.entries(c).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// *************** Filter by 'state' *******************
// *****************************************************
// The event handler function for the form
function runEnter() {
    // Select input element 
    var inputElement = d3.select("#state");
    // Get the value of input element
    var inputValue = inputElement.property("value");
    // console.log(inputElement);
    // console.log(inputValue);

    // Use filter() to filter only the user-input dates -- in input field
    var filteredState = tableData.filter(st => st.state == inputValue);
    // console.log(filterTable);

    // Get a reference to the table body
    var tbody = d3.select("tbody");

    // Create table and populate data only on 'input date'
    filteredState.forEach((st) => {
        var row = tbody.append("tr");
        Object.entries(st).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// *************** Filter by 'country' *****************
// *****************************************************
// The event handler function for the form
function runEnter() {
    // Select input element 
    var inputElement = d3.select("#country");
    // Get the value of input element
    var inputValue = inputElement.property("value");
    // console.log(inputElement);
    // console.log(inputValue);

    // Use filter() to filter only the user-input dates -- in input field
    var filteredCountry = tableData.filter(co => co.country == inputValue);
    // console.log(filterTable);

    // Get a reference to the table body
    var tbody = d3.select("tbody");

    // Create table and populate data only on 'input date'
    filteredCountry.forEach((co) => {
        var row = tbody.append("tr");
        Object.entries(co).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// *************** Filter by 'shape' ******************* 
// *****************************************************
// The event handler function for the form
function runEnter() {
    // Select input element 
    var inputElement = d3.select("#ufo-shape");
    // Get the value of input element
    var inputValue = inputElement.property("value");
    // console.log(inputElement);
    // console.log(inputValue);

    // Use filter() to filter only the user-input dates -- in input field
    var filteredShape = tableData.filter(shp => shp.shape == inputValue);
    // console.log(filterTable);

    // Get a reference to the table body
    var tbody = d3.select("tbody");

    // Create table and populate data only on 'input date'
    filteredShape.forEach((shp) => {
        var row = tbody.append("tr");
        Object.entries(shp).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};


// *************** Clear input button ******************* 
// *****************************************************
// var clearButton = d3.select("#clear-btn");
// // Clear button on click clears fields
// clearButton.on('click', function () {

//     // Keeps page from refreshing completely, only want the table to refresh
//     d3.event.preventDefault();
//     // Clears input fields
//     clearEntries()
// });