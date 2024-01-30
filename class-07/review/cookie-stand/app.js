'use strict';

const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const Seattle = {
  city_name: 'Seattle',
  min_customer: 23,
  max_customer: 65,
  avg_cookies: 6.3,
  document_id: document.getElementById('Seattle-List'),
  // generates a customer value between the min and max customer values.
  amount_of_customers: function(){
    let customerAmount = Math.floor(Math.random() * (this.max_customer - this.min_customer + 1) + this.min_customer);
    return customerAmount;
  },
  // generates random sales data
  cookies_purchased: function() {
    let cookies_purchased = Math.ceil(this.amount_of_customers() * this.avg_cookies);
    return cookies_purchased;
  },
  // generates sales data for every hour the store is open,  sums up all sales values and adds the total to the document.
  cookies_sold_hourly: function() {
    let total = 0;
    for (let hour = 0; hour < 14; hour++){
      let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
      this.document_id.innerHTML += '<li>' + hours[hour] + ': ' + this.cookies_purchased() + '</li>';
      total = total + this.cookies_purchased();
    }
    this.document_id.innerHTML += '<li>Total: ' + total + ' cookies</li>';
  },
  generateSales: function() {
    let total = 0;
    let salesSection = document.getElementById('sales-data');

    // create Header with store name outside the loop
    let sectionElement = document.createElement('section');
    salesSection.appendChild(sectionElement);
    let headingElement = document.createElement('h2');
    sectionElement.appendChild(headingElement);
    headingElement.textContent = this.city_name;

    let listElement = document.createElement('ul');

    for (let hour = 0; hour < storeHours.length; hour++) {
      let timeStamp = storeHours[hour];
      let salesValue = this.cookies_purchased();
      total += salesValue;
      let salesValueElement = document.createElement('li');
      salesValueElement.textContent = timeStamp + ': ' + salesValue;
      listElement.appendChild(salesValueElement);
    }

    let totalElement = document.createElement('p');
    totalElement.textContent = 'Total Sales: ' + total;
    sectionElement.appendChild(totalElement);
    sectionElement.appendChild(listElement);
  }
};

const Tokyo = {
  city_name: 'Tokyo',
  min_customer: 3,
  max_customer: 24,
  avg_cookies: 1.2,
  document_id: document.getElementById('Tokyo-List'),
  amount_of_customers: function () {
    let customerAmount = Math.floor(Math.random() * (this.max_customer - this.min_customer + 1) + this.min_customer);
    return customerAmount;
  },
  cookies_purchased: function () {
    let cookies_purchased = Math.ceil(this.amount_of_customers() * this.avg_cookies);
    return cookies_purchased;
  },
  cookies_sold_hourly: function () {
    let total = 0;
    for (let hour = 0; hour < 14; hour++) {
      let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
      this.document_id.innerHTML += '<li>' + hours[hour] + ': ' + this.cookies_purchased() + '</li>';
      total = total + this.cookies_purchased();
    }
    this.document_id.innerHTML += '<li>Total: ' + total + ' cookies</li>';
  }
};

const Dubai = {
  city_name: 'Dubai',
  min_customer: 11,
  max_customer: 38,
  avg_cookies: 3.7,
  document_id: document.getElementById('Dubai-List'),
  amount_of_customers: function(){
    let customerAmount = Math.floor(Math.random() * (this.max_customer - this.min_customer + 1) + this.min_customer);
    return customerAmount;
  },
  cookies_purchased: function() {
    let cookies_purchased = Math.ceil(this.amount_of_customers() * this.avg_cookies);
    return cookies_purchased;
  },
  cookies_sold_hourly: function() {
    let total = 0;
    for (let hour = 0; hour < 14; hour++){
      let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
      this.document_id.innerHTML += '<li>' + hours[hour] + ': ' + this.cookies_purchased() + '</li>';
      total = total + this.cookies_purchased();
    }
    this.document_id.innerHTML += '<li>Total: ' + total + ' cookies</li>';
  }
};

const Paris = {
  city_name: 'Paris',
  min_customer: 20,
  max_customer: 38,
  avg_cookies: 2.3,
  document_id: document.getElementById('Paris-List'),
  amount_of_customers: function () {
    let customerAmount = Math.floor(Math.random() * (this.max_customer - this.min_customer + 1) + this.min_customer);
    return customerAmount;
  },
  cookies_purchased: function () {
    let cookies_purchased = Math.ceil(this.amount_of_customers() * this.avg_cookies);
    return cookies_purchased;
  },
  cookies_sold_hourly: function () {
    let total = 0;
    for (let hour = 0; hour < 14; hour++) {
      let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
      this.document_id.innerHTML += '<li>' + hours[hour] + ': ' + this.cookies_purchased() + '</li>';
      total = total + this.cookies_purchased();
    }
    this.document_id.innerHTML += '<li>Total: ' + total + ' cookies</li>';
  }
};

const Lima = {
  city_name: 'Lima',
  min_customer: 2,
  max_customer: 16,
  avg_cookies: 4.6,
  document_id: document.getElementById('Lima-List'),
  amount_of_customers: function () {
    let customerAmount = Math.floor(Math.random() * (this.max_customer - this.min_customer + 1) + this.min_customer);
    return customerAmount;
  },
  cookies_purchased: function () {
    let cookies_purchased = Math.ceil(this.amount_of_customers() * this.avg_cookies);
    return cookies_purchased;
  },
  cookies_sold_hourly: function () {
    let total = 0;
    for (let hour = 0; hour < 14; hour++) {
      let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
      this.document_id.innerHTML += '<li>' + hours[hour] + ': ' + this.cookies_purchased() + '</li>';
      total = total + this.cookies_purchased();
    }
    this.document_id.innerHTML += '<li>Total: ' + total + ' cookies</li>';
  }
};

Seattle.cookies_sold_hourly();
Seattle.generateSales();
// Tokyo.cookies_sold_hourly();
// Dubai.cookies_sold_hourly();
// Paris.cookies_sold_hourly();
// Lima.cookies_sold_hourly();