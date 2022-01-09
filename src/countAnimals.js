const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((accumulator, currentSpecie) => {
      accumulator[currentSpecie.name] = currentSpecie.residents.length;
      return accumulator;
    }, {});
  }
  if (animal.specie) {
    return species.filter((specie) => specie.name === animal.specie)[0]
      .residents.length;
  }
}

console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
