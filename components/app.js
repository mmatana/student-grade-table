class App {
  constructor() {
  }
  getGrades() {
    $.ajax(
      {
        url: "https://sgt.lfzprototypes.com/api/grades",
        type: "GET",
        dataType: "json",
        headers: {
          "X-Access-Token": "ikgaB9CQ"
        },

      }
    );
  }
  start() {
    this.getGrades();
  }
}
