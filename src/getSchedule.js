const { species, hours } = require('../data/zoo_data');

function getOfficeHoursWithoutTarget(officeHours, speciesDaysAvailable) {
  return officeHours.sort().map(([day, openCloseHoursEachDay]) => ({
    [day]: {
      officeHour:
        day === 'Monday'
          ? 'CLOSED'
          : `Open from ${openCloseHoursEachDay.open}am until ${openCloseHoursEachDay.close}pm`,
      exhibition:
        day === 'Monday'
          ? 'The zoo will be closed!'
          : speciesDaysAvailable
            .map(([animal, arrayOfDayEachAnimal]) =>
              (arrayOfDayEachAnimal.includes(day) ? animal : false))
            .filter((item) => item !== false),
    },
  }));
}

function getOfficeHoursSpecificDay(officeHours, speciesDaysAvailable, param) {
  if (param === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  const filtered = officeHours.find(([day]) => day === param);
  const [day, openCloseHours] = filtered;
  return {
    [day]: {
      officeHour: `Open from ${openCloseHours.open}am until ${openCloseHours.close}pm`,
      exhibition: speciesDaysAvailable
        .map(([animal, arrayOfDayEachAnimal]) =>
          (arrayOfDayEachAnimal.includes(day) ? animal : false))
        .filter((item) => item !== false),
    },
  };
}

function getAnimalsAndDays() {
  const animals = species.map((specie) => specie.name);
  const days = Object.keys(hours);
  return [...animals, ...days];
}

const arrayOfOfficeHours = Object.entries(hours);
const arraySpecieDaysAvialable = species.map((specie) => [
  specie.name,
  specie.availability,
]);

const isDay = (param) => arrayOfOfficeHours.some((day) => day[0] === param);
const isAnimal = (param) => species.find((specie) => specie.name === param);

function getSchedule(scheduleTarget) {
  const withoutTarget = getOfficeHoursWithoutTarget(
    arrayOfOfficeHours,
    arraySpecieDaysAvialable,
  );
  const targetIsCorrect = getAnimalsAndDays().find(
    (item) => item === scheduleTarget,
  );
  if (!scheduleTarget || !targetIsCorrect) {
    return withoutTarget.reduce((acc, curr) => ({ ...acc, ...curr }));
  }
  if (isDay(scheduleTarget)) {
    return getOfficeHoursSpecificDay(
      arrayOfOfficeHours,
      arraySpecieDaysAvialable,
      scheduleTarget,
    );
  }
  return isAnimal(scheduleTarget).availability;
}

module.exports = getSchedule;
