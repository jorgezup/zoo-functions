const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return entrants.reduce((accumulator, currentPerson) => {
    let child = 0;
    let adult = 0;
    let senior = 0;
    if (currentPerson.age < 18) {
      child += 1;
    }
    if (currentPerson.age >= 18 && currentPerson < 50) {
      adult += 1;
    }
    senior += 1;
    return { `child: ${child} adult: ${adult} senior: ${senior} `};
  });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
}

module.exports = { calculateEntry, countEntrants };
