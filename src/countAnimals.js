const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((accumulator, currentSpecie) => {
      accumulator[currentSpecie.name] = currentSpecie.residents.length;
      return accumulator;
    }, {});
  }
  /* Faz a busca da specie pelo nome passado como parâmetro */
  const animalSpecieFounded = species.find(
    (specie) => specie.name === animal.specie,
  );
  /*  Caso tenha o sexo no parêmetro entra neste if */
  if (animal.sex) {
    return animalSpecieFounded.residents.filter(
      (resident) => resident.sex === animal.sex,
    ).length;
  }
  /* Caso tenha apenas a specie retorna a linha abaixo */
  return animalSpecieFounded.residents.length;
}

module.exports = countAnimals;
