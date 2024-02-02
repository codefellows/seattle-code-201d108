'use strict';

console.log('I am loaded!!');

// TODO: Cookie Stand Constuctor!!
function City(cityName, minCustomers, maxCustomers, avgCookies) {
  this.cityName = cityName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  // hourly sales calculations
  this.hourlySales = [];
  this.dailyTotal = 0;
}

City.prototype.customerAmount = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers); 
}

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
City.prototype.simulateHourlySales = function() {
  console.log('SIMULATE SALES RUNNING!!');
  for (let i = 0; i < hours.length; i++) {
    let customers = this.customerAmount();
    let sales = Math.ceil(customers * this.avgCookies);
    this.dailyTotal += sales;
    this.hourlySales.push(sales);
  }
}

City.prototype.cityRender = function() {
  console.log('MY CITY HOURLY SALES DATA', this.hourlySales);
  let body = document.getElementById('city');
  let { cityName, hourlySales } = this;
  let row = document.createElement('tr');
  body.appendChild(row);
  // add city name to table
  let nameCell = document.createElement('td');
  nameCell.textContent = cityName;
  row.appendChild(nameCell);
  console.log(row);

  // loop through hourlySales
  for (let i =0; i < hourlySales.length; i++) {
    // output a table cell
    let cell = document.createElement('td');
    cell.textContent = hourlySales[i];
    row.appendChild(cell);
    // add text content of the amount of cookies sales
  }

  // add the daily Totals
  let cell = document.createElement('td');
  cell.textContent = this.dailyTotal;
  row.appendChild(cell);
} 

let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);
let stores = [seattle, tokyo, dubai, paris, lima];
for (let i =0; i < stores.length; i++) {
  stores[i].simulateHourlySales();
  stores[i].cityRender();
}

// add event listeners, create cookie store when form is submitted
let formElement = document.getElementById('city-form');
formElement.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // stops page from reloading
  console.log('FORM SUBMITTED!!!');
  // how we read the values from the form inputs???
  let cityName = event.target.cityName.value;
  let minCustomers = event.target.minCustomers.value;
  let maxCustomers = event.target.maxCustomers.value;
  let avgCookies = event.target.avgCookies.value;
  let newCity = new City(cityName, parseInt(minCustomers), parseInt(maxCustomers), parseInt(avgCookies))
  stores.push(newCity);
  newCity.simulateHourlySales();
  newCity.cityRender();
}

function generateFooterRow() {
  let footer = document.getElementById('total');
  // look at all the stores and add up the hourly totals as well as the grand total

  // loop through all hours
    // for each hour loop through all stores
  let grandTotal = 0
  for (let i =0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < stores.length; j++) {

    }
  }
}