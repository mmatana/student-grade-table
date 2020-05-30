class App {
  constructor(gradeTable, pageHeader,gradeForm) {
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);

    this.getGrades = this.getGrades.bind(this);
    this.createGrade = this.createGrade.bind(this);

    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var gradesSum = 0;
    for (var i = 0; i < grades.length; i++){
      gradesSum += grades[i].grade;
    }
    var average = gradesSum/grades.length;
    this.pageHeader.updateAverage(average);


  }
  getGrades() {
    console.log("get grades");
    $.ajax(
      {
        url: "https://sgt.lfzprototypes.com/api/grades",
        type: "GET",
        dataType: "json",
        headers: {
          "X-Access-Token": "ItBpCTx1"
        },
        success: grades => this.handleGetGradesSuccess(grades),
        error: error => this.handleGetGradesError(error)
      }
    );
  }

  handleCreateGradeError(error) {
    console.error(error);
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }
  createGrade(name, course, grade) {
    console.log(name, course, grade);
    $.ajax(
      {
        type: "POST",
        url: "https://sgt.lfzprototypes.com/api/grades",
        dataType: "json",
        headers: {
          "X-Access-Token": "ItBpCTx1"
        },
        data: {
          "name": name,
          "course": course,
          "grade": grade
        },
        success: () => {this.handleCreateGradeSuccess()},
        error: () => {this.handleCreateGradeError()}

      }
    )
  }
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
  }

}
