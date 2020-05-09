
var table = document.querySelector("table");
var gradeTable = new GradeTable(table);
var header = document.querySelector("header");
var pageHeader = new PageHeader(header);
var app = new App(gradeTable);
app.start();
