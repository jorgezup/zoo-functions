const { species } = require('../data/zoo_data');

const reducer = (accumulator, current) => {
  if (accumulator[current.location] === undefined) {
    accumulator[current.location] = [];
  }

  accumulator[current.location].push(current.name);
  return accumulator;
};

function getAnimalMap(options) {
  if (!options) {
    return species.reduce(reducer, {});
  }
}

module.exports = getAnimalMap;
