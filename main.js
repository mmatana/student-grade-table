
var table = document.querySelector("table");
var gradeTable = new GradeTable(table);

var header = document.querySelector("header");
var pageHeader = new PageHeader(header);

var gForm = document.querySelector('form');
var gradeForm = new GradeForm(gForm);

var app = new App(gradeTable, pageHeader, gradeForm);
app.start();
