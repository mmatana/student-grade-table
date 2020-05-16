class GradeTable{
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tBody = this.tableElement.querySelector("tbody");

    for (var i = 0; i < grades.length; i++ ) {
      var tRow = document.createElement('tr');
      var tDataName = document.createElement('td');
      var tDataCourse = document.createElement('td');
      var tDataGrade = document.createElement('td');

      tDataName.textContent = grades[i].name;
      tDataCourse.textContent = grades[i].course;
      tDataGrade.textContent = grades[i].grade;

      tRow.appendChild(tDataName);
      tRow.appendChild(tDataCourse);
      tRow.appendChild(tDataGrade);
      tBody.appendChild(tRow);
    }
  }
}
