// Javascript portion of my Campefire coffee project
var pikePlaceMarket = {
  customersPerHour: 0,
  minCustomersHr: 14,
  maxCustomersHr: 35,
  cupsPerCust: 1.2,
  toGoPoundsPerCustomer: 0.34,
  //Random number method will go in here
  randomCust: function() {
    return Math.floor(Math.random() * (35 - 14 + 1)) + 14;
    console.log(randomCust);
    return this.customersPerHour = randomCust;
    setCustomersperHour = randomCust();
    //now return randomCust into customersPerHour
  },
  cupsSoldPerHour: function() {
  }
  // Projected number of cups sold per hour (at this location)
  // add all projected hours together to get cups per day
  //Projected number of pounds sold per hour
  // Total number of beans needed to make cups and fulfill to-go bean orders by hours
  //The number of employees needed you will need to figure out the total amount at each location then break it down
};
pikePlaceMarket.randomCust();
pikePlaceMarket.check = function() {
  console.log(this.randomCust);
};
