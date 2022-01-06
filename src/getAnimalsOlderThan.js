const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const filteredAnimals = data.species
    .filter((item) => item.name === animal)
    .map((item) => item.residents);
  return filteredAnimals[0].every((ele) => ele.age > age);
}

module.exports = getAnimalsOlderThan;
