// --------- select the table and style it striped ----------
var table = d3.select("#student-table");
var tbody = d3.select("#student-tbody");
table.attr("class", "table table-striped");
// console.log(grades);
// ----------------------------------------------------------------------
// ----- Loop through each object in the array and create a row ---------
grades.forEach((studentgrade) => {
  var row = tbody.append("tr");

  var x = parseInt(studentgrade.grade);

// ----- Loop through each entry of objects and create cells -----
  if (x > 70) {
    Object.entries(studentgrade).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      row.attr("class", "bg-success");
    });
  }
  else if (x >= 60 && x <= 70) {
    Object.entries(studentgrade).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      row.attr("class", "bg-warning");
    });
  }
  else if (x < 60) {
    Object.entries(studentgrade).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      row.attr("class", "bg-danger");
    });
  }
});
