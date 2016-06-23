// Javascript portion of my Campefire coffee project
// Global variables
var allStores = [];
var allTimesOpen = ["6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm"];
var totalBeansEachHour = [];
var allEmployeesPerHour = [];

//Constructor
function Store(storeName, minCustomersHr, maxCustomersHr, cupsPerCust, toGoPoundsPerCustomer){
  this.storeName = storeName;
  this.minCustomersHr = minCustomersHr;
  this.maxCustomersHr = maxCustomersHr;
  this.cupsPerCust = cupsPerCust;
  this.toGoPoundsPerCustomer = toGoPoundsPerCustomer;
  this.lbsPerHour = [];
  this.customersAtHour = [];
  this.cupsPerHour = [];
  this.beansPerHourCups = [];
  this.totalBeansHour = [];
  this.employeesPerHour = [];
  this.totalCust = 0;
  this.beansPerDay = 0;
  this.totalLbsPerDay = 0;
  this.totalCupsPerDay = 0;
  this.totalEmployees = 0;
  this.cupsPerLb = 16;
  this.openHours = 15;
  allStores.push(this);

}
//Methods for the Constructor
Store.prototype.requirementsPerHour = function () {
  var custTotal = 0.0;
  var cupsTotal = 0.0;
  var lbsTotal = 0.0;
  for (var i = 0; i < this.openHours; i++) {
    // tried iterating over the openHours array by length, for some reason that didnt work? I had to define a variable that included the hours it was open.
    custPerHour = Math.floor(Math.random() * (this.maxCustomersHr - this.minCustomersHr + 1) + this.minCustomersHr);
    console.log(custPerHour);
    this.customersAtHour.push(custPerHour);
    this.cupsPerHour.push(Math.round(custPerHour * this.cupsPerCust));
    this.lbsPerHour.push(Math.round(custPerHour * this.toGoPoundsPerCustomer));
    this.beansPerHourCups.push(Math.round(this.cupsPerHour[i] / this.cupsPerLb));
    // console.log(beansPerHourCups);
    // for some reason the above log breaks the code?
    custTotal += Math.round(custPerHour * this.cupsPerCust);
    // += in order to have it add for each item in the array
    cupsTotal += Math.round(custPerHour * this.toGoPoundsPerCustomer);
    custTotal += custPerHour;
  }
  this.totalCust = Math.ceil(custTotal);
  this.totalCupsPerDay = Math.ceil(cupsTotal);
  this.totalLbsPerDay = Math.ceil(lbsTotal);
};


// Store.prototype.cupsSoldPerHour = function (allTimesOpen) {
//   for ()
// };
Store.prototype.randomCust = function () {
  this.customersPerHour = Math.floor(Math.random() * (this.maxCustomersHr - this.minCustomersHr + 1) + this.minCustomersHr);
};

Store.prototype.cupsSoldPerHour = function () {

 
};

//this is the last method
Store.prototype.doAllTheMethods = function () {
  this.randomCust();
};

// for greater cosmos kudos I should update my linter to allow the below logic
function updateStores() {
  for (elem of allStores) {
    elem.doAllTheMethods();
  }
}
//create a store
var pikePlaceMarket = new Store("Pike Place Market", 14, 35, 1.2, 0.34);
console.log(pikePlaceMarket);

updateStores();


//SHOULD BE ALMOST AT THE VERY END - HANDLING EVENTS
function handleFormSubmit(event) {
  event.preventDefault();
  var name = event.target.storeName.value;
}
  var min = parseFloat(event.target.minCustomersHr.value);
  var max = parseFloat(event.target.maxCustomersHr.value);
  var cPC = parseFloat(event.target.cupsPerCust.value);
  var tGPPC = parseFloat(event.target.toGoPoundsPerCustomer.value);
  var newStore = new Store(name, min, max, cPC, tGPPC);

  // In order to not have to run this twice I think I will make a global variable for the user stores - will help with tabling ?
  updateStores();

  //Clear the form
  event.target.storeName.value = "";
  event.target.minCustomersHr.value = null;
  event.target.maxCustomersHr.value = null;
  event.target.cupsPerCust.value = null;
  event.target.toGoPoundsPerCustomer.value = null;
}



form.addEventListener("submit", handleFormSubmit);


// var pikePlaceMarket = {
//   customersPerHour: 0,
//   minCustomersHr: 14,
//   maxCustomersHr: 35,
//   cupsPerCust: 1.2,
//   toGoPoundsPerCustomer: 0.34,
//   //Random number method will go in here
//   randomCust: function() {
//     return Math.floor(Math.random() * (35 - 14 + 1)) + 14;
//     console.log(randomCust);
//     return this.customersPerHour = randomCust;
//     setCustomersperHour = randomCust();
//     //now return randomCust into customersPerHour
//   },
//   cupsSoldPerHour: function() {
//   }
//   // Projected number of cups sold per hour (at this location)
//   // add all projected hours together to get cups per day
//   //Projected number of pounds sold per hour
//   // Total number of beans needed to make cups and fulfill to-go bean orders by hours
//   //The number of employees needed you will need to figure out the total amount at each location then break it down
// };
// pikePlaceMarket.randomCust();
// pikePlaceMarket.check = function() {
//   console.log(this.randomCust);
// };
