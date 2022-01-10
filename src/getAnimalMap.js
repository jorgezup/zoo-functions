/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
const { species } = require('../data/zoo_data');

const reducer = (accumulator, current) => {
  if (accumulator[current.location] === undefined) {
    accumulator[current.location] = [];
  }

  accumulator[current.location].push(current.name);
  return accumulator;
};

// const reducerWithNames = (accumulator, current) => {
//   if (accumulator[current.location] === undefined) {
//     accumulator[current.location] = [];
//   }

//   accumulator[current.location].push({
//     [current.name]: current.residents.map((item) => item.name),
//   });

//   return accumulator;
// };

const reducerSorted = (accumulator, current) => {
  if (accumulator[current.location] === undefined) {
    accumulator[current.location] = [];
  }

  accumulator[current.location].push({
    [current.name]: current.residents
      .map((item) => item)
      .filter((item) => item.sex === sex)
      .map((item) => item.name)
      .sort(),
  });

  console.dir('accumulator', accumulator, { depth: 4 });

  return accumulator;
};

function getAnimalMap(options) {
  if (!options) {
    return species.reduce(reducer, {});
  }
  // if (options.includesNames) {
  //   return species.reduce(reducerWithNames, {});
  // }
  if (options.sex) {
    const a = species
      .map((item) => item)
      .map((item) => item.residents.sex === 'male');

    console.log(a);
  }
}

const options = {
  sorted: true,
  includesNames: true,
  sex: 'female',
};

console.dir(getAnimalMap(options), { depth: 4 });

module.exports = getAnimalMap;
