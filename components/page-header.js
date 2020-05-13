class PageHeader {
  constructor(headerElement){
  this.headerElement = headerElement;
  }
  updateAverage(newAverage){
    this.headerElement.querySelector("span").append(newAverage);
  }
}
