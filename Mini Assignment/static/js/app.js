// Use D3 to select the table
// Use D3 to select the table body
// Use D3 to set the table class to `table table-striped`

// --------- select the table and style it striped ----------
var table = d3.select("#student-table");
var tbody = d3.select("#student-tbody");
table.attr("class", "table table-striped");
// console.log(grades);

// Use a forEach function to loop through the array of objects (from your data)
// Append one table row per student/grade
// Assign values to the `student` name variable and the `grade` variable
// Append one cell for the student and one cell for the grade

// ---------- Loop through each object in the array and create a row ----------
grades.forEach((studentgrade) => {
  var row = tbody.append("tr");
// ---------- Loop through each entry of objects and create cells ----------
  Object.entries(studentgrade).forEach(([student, grade]) => {
  var cell = row.append("td");
  cell.text(grade);
  });
});

// ----------
grades.forEach((studentgrade) => {
  Object.entries(studentgrade).forEach(([key, value]) => {
    var x = parseInt(studentgrade.grade);
    if (x <= 60) {
      // console.log(grd);
      // console.log('red');
      d3.select("tbody").append("tr").attr("class", "bg-danger");
    }
    else if (x < 70 && x > 60) {
      // console.log(grd);
      // console.log('yellow');
      d3.select("tbody").append("tr").attr("class", "bg-warning");
    }
    else {
      console.log('nothing');
    }
  });
});

// // ------ filterinng fuction for grade levels----------
// function selectGrade(x) {
//   return x.grade < 70;
// }
// // ------ filter() uses the custom function as its argument
// var warnGrade = grades.filter(selectGrade);
// // console.log(warnGrade);
//
// // -------- styling the rows
// d3.select("tr").attr("class", "bg-warning");

// --------------- SRI HELP'S -------------------------
// --------------- SRI HELP'S -------------------------
// --------------- SRI HELP'S -------------------------
// --------------- SRI HELP'S -------------------------
// Use D3 to select the table
var student_table = d3.select("#student-table");
// Use D3 to select the table body
var tbody = d3.select("#student-tbody");
// Use D3 to set the table class to `table table-striped`
// Use a forEach function to loop through the array of objects (from your data)
grades.forEach((studentgrade) => {
  var row = tbody.append("tr");
  var grd = parseInt(studentgrade.grade);
  if (grd <= 60)
  {
    Object.entries(studentgrade).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    cell.classed("badred", true);
  });
  }
  else if (grd < 70 && grd > 60)
  {
    Object.entries(studentgrade).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      cell.classed("loweryellow", true);
    });
  }
  else if (grd > 70)
  {
    Object.entries(studentgrade).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      //cell.classed("loweryellow", true); - do nothing
    });
  }
});
