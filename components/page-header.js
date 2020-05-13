class PageHeader {
  constructor(headerElement){
  this.headerElement = headerElement;
  }
  updateAverage(newAverage){
    this.headerElement.querySelector("#grade").append(newAverage);
  }
}
