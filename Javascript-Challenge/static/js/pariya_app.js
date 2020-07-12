// from data.js
var tableData = data;
// Select the button
var filterButton = d3.selectAll("#filter-btn");
// Create event handlers
filterButton.on("click", runEnter);