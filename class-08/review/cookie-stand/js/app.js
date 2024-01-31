'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]
 

function getRandomNumber(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

// constructor functions!!!
function City(location, min, max, avg) {
  this.Location = location;
  this.min_customer = min;
  this.max_customer = max;
  this.avg_cookie_sales = avg;
  this.total = 0;
  this.allcookies = [];
}
City.prototype.cookies_sold_hourly = function() {
  for(let hour = 0; hour < hours.length; hour++) {
    let customers = getRandomNumber(this.min_customer, this.max_customer);
    let cookies = Math.floor(customers * this.avg_cookie_sales);
    this.allcookies.push(cookies);
    this.total += cookies;
  }
  console.log(this.allcookies);
}
City.prototype.render_list = function () {
  for (let i = 0; i < hours.length; i++) {
    let listElement = document.getElementById(this.Location);
    let listItem = document.createElement('li');
    console.log(this.allcookies);
    console.log(this.allcookies[0]);
    listItem.textContent = `${hours[i]}: ${this.allcookies[i]}`;
    listElement.appendChild(listItem);
  }
}
// draws a table in our HTML Document?
City.prototype.render_table = function() {
  let tableBody = document.getElementById('table-body');
  let row = document.createElement('tr');

  // creat the cell with the city location
  let locationCell = document.createElement('td');
  locationCell.textContent = this.Location;
  row.appendChild(locationCell);

  // add all sales values stored in allCookies
  for (let i = 0; i < hours.length; i++) {
    let tableCell = document.createElement('td');
    console.log(this.allcookies);
    console.log(this.allcookies[0]);
    tableCell.textContent = `${this.allcookies[i]}`;
    row.appendChild(tableCell);
  }
  tableBody.appendChild(row);

  // add the last cell with the daily total
  let totalCell = document.createElement('td');
  totalCell.textContent = this.total;
  row.appendChild(totalCell);
}

// adds the hours to the table head
let tableHead = document.getElementById('table-head');
let tableRow = document.createElement('tr');
tableHead.appendChild(tableRow);

let locationCell = document.createElement('th');
locationCell.textContent = 'Location';
tableRow.appendChild(locationCell);

for (let i = 0; i < hours.length; i++) {
  let tableCell = document.createElement('th');
  tableCell.textContent = `${hours[i]}`;
  tableRow.appendChild(tableCell);
}

let totalCell = document.createElement('th');
totalCell.textContent = 'Daily Totals';
tableRow.appendChild(totalCell);

let Seattle = new City('Seattle', 23, 65, 6.3);

// let Seattle = {
//   Location: 'Seattle',
//   min_customer: 23,
//   max_customer: 65, 
//   avg_cookie_sales: 6.3,
//   total: 0,
//   allcookies: [],
//   cookies_sold_hourly:function() {
//     //let total = 0; 
//     //let allcookies=[];
//     for (let hour =0; hour <hours.length; hour++){
//       let customers= getRandomNumber(this.min_customer,this.max_customer);
//       let cookies= Math.floor(customers*this.avg_cookie_sales);
//       this. allcookies.push(cookies);
//       this.total+=cookies;
//     }
//     console.log(this.allcookies); 
//   }
// }

Seattle.cookies_sold_hourly();
Seattle.render_list();
Seattle.render_table();
// for( let i = 0 ; i < hours.length; i++) {
//     let listElement = document.getElementById('Seattle');
//     let listItem = document.createElement('li');
//     console.log (Seattle.allcookies)
//     console.log(Seattle.allcookies[0])
//     // debugger;
//   listItem.textContent =`${hours[i]}: ${Seattle.allcookies[i]}`;
//     listElement.appendChild(listItem);
// }

let toyko = {
    Location: 'Toyko',
    min_customer: 23,
    max_customer: 65, 
    avg_cookie_sales: 6.3,
    total: 0,
    allcookies: [],
   cookies_sold_hourly:function() { 
      //let total = 0; 
      for (let hour =0; hour <hours.length; hour++){
        let customers= getRandomNumber(this.min_customer,this.max_customer);
        let cookies= Math.floor(customers*this.avg_cookie_sales);
        this. allcookies.push(cookies);
        this.total+=cookies;
      
      console.log(this.allcookies);
      }
    }	
}    
let dubai = {
    Location: 'Dubai',
    min_customer: 23,
    max_customer: 65, 
    avg_cookie_sales: 6.3, 
    total: 0,
    allcookies: [],
    cookies_sold_hourly:function() {
      //let total=0;
      //let allcookies=[];
      for (let hour =0; hour <hour.length; hour++) {
        let customers= getRandomNumber(this.min_customer,this.max_customer);
        let cookies = Math.floor(customers*this.avg_cookie_sales);
        this.total+=cookies;
      }
      console.log(this.allcookies.cookies);
    },
}

let paris = {
  Location: 'Paris',
  min_customer: 23,
  max_customer: 65, 
  avg_cookie_sales: 6.3,
  total: 0,
  allcookies: [],
  cookies_sold_hourly:function() {
    //let total = 0;
    //let allcookies=[];
    for (let hour =0; hour <hours.length; hour++){
      let customers= getRandomNumber(this.min_customer,this.max_customer);
      let cookies= Math.floor(customer*this.this.avg_cookie_sales);
      this.this. allcookies.push(cookies);
      this.this.total+=cookies;
    }
    console.cog(thid.allcookies);
    this.cookies_purchased()
      + '</li>';
    Total = total + this.cookies_purchased();
  },
}

let lima = {
    Location: 'lime',
    min_customer: 23,
    max_customer: 65, 
    avg_cookie_sales: 6.3,
    cookies_sold_hourly: function(){
      let total = 0; total =341
      for (let hour =0; hour <14; hour++){
        let hours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
        '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]}
      this.document_id.innerHTML += '<li>' + hours[hours] + ':' + this.cookies_purchased()
    + '</li>';
      Total = total + this.cookies_purchased();
    },
}

// Toyko.cookies_sold_hourly();
// Dubai.cookies_sold_hourly();
// Paris.cookies_sold_hourly();
// Lima.cookies_sold_hourly();
