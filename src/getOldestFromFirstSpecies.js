const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getAnimalId = employees.find((employee) => employee.id === id)
    .responsibleFor[0];
  const getResidents = species
    .filter((animal) => animal.id === getAnimalId)[0]
    .residents.sort((a, b) => b.age - a.age)[0];
  const { name, age, sex } = getResidents;
  return [name, sex, age];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
