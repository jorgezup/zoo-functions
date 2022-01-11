const { species } = require('../data/zoo_data');

const reducer = (accumulator, current) => {
  if (accumulator[current.location] === undefined) {
    accumulator[current.location] = [];
  }

  accumulator[current.location].push(current.name);
  return accumulator;
};

const reducerWithNames = (accumulator, current) => {
  if (accumulator[current.location] === undefined) {
    accumulator[current.location] = [];
  }

  accumulator[current.location].push({
    [current.name]: current.residents.map((item) => item.name),
  });

  return accumulator;
};

const reducerSorted = (accumulator, current) => {
  if (accumulator[current.location] === undefined) {
    accumulator[current.location] = [];
  }

  accumulator[current.location].push({
    [current.name]: current.residents.map((item) => item.name).sort(),
  });
  return accumulator;
};

const reducerSortedFemale = (accumulator, current) => {
  if (accumulator[current.location] === undefined) {
    accumulator[current.location] = [];
  }

  accumulator[current.location].push({
    [current.name]: current.residents
      .filter((item) => item.sex === 'female')
      .map((item) => item.name)
      .sort(),
  });
  return accumulator;
};

function getAnimalMap(options) {
  if (!options) {
    return species.reduce(reducer, {});
  }
  if (options.sex === 'female') {
    return species.reduce(reducerSortedFemale, {});
  }
  if (options.includesNames) {
    return species.reduce(reducerWithNames, {});
  }
  if (options.sorted) {
    return species.reduce(reducerSorted, {});
  }
}

const options = {
  sorted: true,
  includesNames: true,
  sex: 'female',
};

console.dir(getAnimalMap(options), { depth: 4 });

module.exports = getAnimalMap;
