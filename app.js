// Javascript portion of my Campefire coffee project
// Global variables
var allStores = [];
var allTimesOpen = ["6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm"];

//Constructor
function Store(name, min, max, cPC, tGPPC){
  this.storeName = name;
  this.minCustomersHr = min;
  this.maxCustomersHr = max;
  this.customersPerHour = 0;
  this.cupsPerCust = cPC;
  this.toGoPoundsPerCustomer = tGPPC;
  allStores.push(this);
}
//Methods for the Constructor
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
