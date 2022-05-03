/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-expressions */
const { species, employees } = require('../data/zoo_data');

const getSpecies = (responsible) =>
  responsible.reduce((accu, animalId) => {
    const { name, location } = species.find((specie) => specie.id === animalId);
    accu.push({ specie: name, location });
    return accu;
  }, []);

function getEmployeesCoverage() {
  return employees.reduce((acc, employee) => {
    const { id, firstName, lastName, responsibleFor } = employee;
    acc.push({
      id,
      fullName: `${firstName} ${lastName}`,
      species: getSpecies(responsibleFor).map((item) => item.specie),
      locations: getSpecies(responsibleFor).map((item) => item.location),
    });
    return acc;
  }, []);
}

console.dir(getEmployeesCoverage(), { depth: 4 });

module.exports = getEmployeesCoverage;
