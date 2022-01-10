const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return entrants.reduce(
    (accumulator, currentPerson) => {
      if (currentPerson.age < 18) {
        accumulator.child += 1;
      }
      if (currentPerson.age >= 18 && currentPerson.age < 50) {
        accumulator.adult += 1;
      }
      if (currentPerson.age >= 50) accumulator.senior += 1;
      return accumulator;
    },
    {
      child: 0,
      adult: 0,
      senior: 0,
    },
  );
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
