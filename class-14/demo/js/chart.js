'use strict';

const ctx = document.getElementById('myChart');
let dataFromStorage = fetchData();
let goats = [];

if (dataFromStorage) {
  goats = dataFromStorage;
} else {
  let goat1 = new Goat('img/cruisin-goat.jpg', 'Cruisin');
  let goat2 = new Goat('img/float-your-goat.jpg', 'Floating Goat');
  let goat3 = new Goat('img/goat-away.jpg', 'Goat Away');
  let goat4 = new Goat('img/goat-logo.png', 'Goat Logo');
  let goat5 = new Goat('img/goat-out-of-hand.jpg', 'Goat Hand');
  let goat6 = new Goat('img/kissing-goat.jpg', 'Kissing Goat');
  let goat7 = new Goat('img/sassy-goat.jpg', 'Sassy Goat');
  let goat8 = new Goat('img/smiling-goat.jpg', 'Smiling Goat');
  let goat9 = new Goat('img/sweater-goat.jpg', 'Sweater Goat');

  goats.push(goat1, goat2, goat3, goat4, goat5, goat6, goat7, goat8, goat9);
}
viewChart();

// get an array of all timesShown from the goats array.
function getNames() {
  let names = [];
  for (let i = 0; i < goats.length; i++) {
    names.push(goats[i].name)
  }
  return names;
}

// get an array of all timesClicked from the goats array.
function getClicks() {
  let clicks = [];
  for (let i = 0; i < goats.length; i++) {
    clicks.push(goats[i].clicks);
  }
  return clicks;
}

// get an array of all goat names from the goats array.
function getViews() {
  let views = [];
  for (let i = 0; i < goats.length; i++) {
    views.push(goats[i].timesShown);
  }
  return views;
}

function viewChart() {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: getNames(),
      datasets: [{
        label: '# of Clicks',
        data: getClicks(),
        borderWidth: 1
      }, {
        label: '# of Views',
        data: getViews(),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}