/* eslint-disable max-lines-per-function */
/* eslint-disable editorconfig/editorconfig */
const { species, hours } = require('../data/zoo_data');

function getOfficeHoursWithoutTarget(officeHours, speciesDaysAvailable) {
  return officeHours.sort().map((day) => ({
    // ordena o array de dias e para cada dia é criado um objeto
    [day[0]]: {
      // faz a verificação caso seja segunda coloque como fechado,
      // caso contrário utiliza as informações de abertura e fechamento
      officeHour:
        day[0] === 'Monday'
          ? 'CLOSED'
          : `Open from ${day[1].open}am until ${day[1].close}pm`,
      // utiliza a mesma lógica de cima
      exhibition:
        day[0] === 'Monday'
          ? 'The zoo will be closed!'
          : speciesDaysAvailable /* 
          [
            [ 'lions', [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ] ],
            ...
          ]
           */
              .map((item) => {
                /* 
                  Verifica se os dias da espécie e igual o dia de exibição
                  caso seja adiciona a espécie, caso não retorna false
                  no final é feito um filtro para remover o false
                */
                if (item[1].includes(day[0])) {
                  return item[0];
                }
                return false;
              })
              .filter((item) => item !== false),
    },
  }));
}

function getAnimalsAndDays() {
  const animals = species.map((specie) => specie.name);
  const days = Object.keys(hours);
  return [...animals, ...days];
}

function getSchedule(scheduleTarget) {
  /* 
    Transforma o objeto em um array
    sendo a posição [0] do array o dia da semana
    e a posição [1] do array um objeto contendo open e close
   */
  const arrayOfOfficeHours = Object.entries(hours);
  /* 
    Cria um array com o nome da espécie e os dias disponíveis
  */
  const arraySpecieDaysAvialable = species.map((specie) => [
    specie.name,
    specie.availability,
  ]);

  const withoutTarget = getOfficeHoursWithoutTarget(
    arrayOfOfficeHours,
    arraySpecieDaysAvialable,
  );

  const targetIsCorrect = getAnimalsAndDays().find(
    (item) => item === scheduleTarget,
  );

  if (!scheduleTarget || !targetIsCorrect) {
    /* Utilizei o reduce para retornar apenas um objeto */
    return withoutTarget.reduce((acc, curr) => ({ ...acc, ...curr }));
  }

  if (scheduleTarget === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }

  // console.dir(daysOfficeHours, { depth: 4 });
  // return daysOfficeHours;
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
