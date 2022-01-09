const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((accumulator, currentSpecie) => {
      accumulator[currentSpecie.name] = currentSpecie.residents.length;
      return accumulator;
    }, {});
  }

  return animal;
}

console.log(countAnimals());

module.exports = countAnimals;
