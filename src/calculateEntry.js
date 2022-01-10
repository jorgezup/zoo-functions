const data = require('../data/zoo_data');

function isChild(age) {
  return age < 18;
}

function isAdult(age) {
  return age >= 18 && age < 50;
}

function isSenior(age) {
  return age >= 50;
}

function countEntrants(entrants) {
  const quantityOfChild = entrants.filter((entrant) => isChild(entrant.age));
  const quantityOfAdult = entrants.filter((entrant) => isAdult(entrant.age));
  const quantityOfSenior = entrants.filter((entrant) => isSenior(entrant.age));
  const result = {
    child: quantityOfChild.length,
    adult: quantityOfAdult.length,
    senior: quantityOfSenior.length,
  };
  return result;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const quantiryOfPeople = countEntrants(entrants);
  const { prices } = data;
  const childPrice = quantiryOfPeople.child * prices.child;
  const adultPrice = quantiryOfPeople.adult * prices.adult;
  const seniorPrice = quantiryOfPeople.senior * prices.senior;
  return childPrice + adultPrice + seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
