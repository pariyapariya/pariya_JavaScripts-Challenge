// from data.js
var tableData = data;
// Select the button
var filterButton = d3.select("#filter-btn");
// Create event handlers
filterButton.on("click", checkInput);

// *****************************************************************
// Check if input field is filled, if yes --> run following function
function checkInput() {
    
    var datetimeInput = d3.select("#datetime").property("value");
    var cityInput = d3.select("#city").property("value");
    var stateInput = d3.select("#state").property("value");
    var countryInput = d3.select("#country").property("value");
    var shapeInput = d3.select("#ufo-shape").property("value");

    if (datetimeInput !== "") {
        datetime();
    } else if (cityInput !== "") {
        city();
    } else if (stateInput !== "") {
        state();
    } else if (countryInput !== "") {
        country();
    } else {
        shape();
    };
};

// *************** Filter by 'date/time' ***************
// *****************************************************
// The event handler function for the form
function datetime() {
    // prevent the form from refreshing the page
    // d3.event.preventDefault() 

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
function city() {

    var inputElement = d3.select("#city");
    var inputValue = inputElement.property("value");
    var filteredCity = tableData.filter(c => c.city == inputValue);
    var tbody = d3.select("tbody");

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
function state() {

    var inputElement = d3.select("#state");
    var inputValue = inputElement.property("value");
    var filteredState = tableData.filter(st => st.state == inputValue);
    var tbody = d3.select("tbody");

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
function country() {

    var inputElement = d3.select("#country");
    var inputValue = inputElement.property("value");
    var filteredCountry = tableData.filter(co => co.country == inputValue);
    var tbody = d3.select("tbody");

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
function shape() {

    var inputElement = d3.select("#ufo-shape");
    var inputValue = inputElement.property("value");
    var filteredShape = tableData.filter(shp => shp.shape == inputValue);
    var tbody = d3.select("tbody");

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
var clearButton = d3.select("#clear-btn");
// Clear button on click clears fields
clearButton.on('click', function () {
    // Clear filtered table data
    d3.selectAll("td").remove();
});



