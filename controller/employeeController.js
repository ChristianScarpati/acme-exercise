const { regExpTimes: getTimes, regExpNames: getNames } = require("../utils/global.js");

//convert the data to data Array
const parseDocumentData = (data) => {
  const lines = data.toString().split("\n");
  let arrayData = [];

  for (const line of lines) {
    const [names] = line.match(getNames) || [];
    const [timeWorked] = line.match(getTimes) || [];

    try {
      const arrayOfTime = timeWorked.split(",");
      arrayData.push({ [names]: arrayOfTime });
    } catch (error) {
      console.error(`An error has occured with the data names: ${error}`);
    }
  }

  return arrayData;
};

//check the coincidence between employees
const checkCoincidences = (array1, array2) => {
  let coincidences = 0;

  for (const element of array1) {
    if (array2.includes(element)) {
      coincidences++;
    }
  }

  return coincidences;
};

const getFirstObjectKey = (object) => {
  return Object.keys(object)[0];
};

const IterationOfNames = (employeesArray) => {
  const employeeSchedules = employeesArray[0][getFirstObjectKey(employeesArray[0])];

  employeeSchedules.forEach((_, j) => {
    const {
      [j]: {
        [getFirstObjectKey(employeesArray[j])]: employee1,
        [getFirstObjectKey(employeesArray[j])]: schedule1,
      },
    } = employeesArray;

    employeeSchedules.forEach((_, i) => {
      const {
        [i]: {
          [getFirstObjectKey(employeesArray[i])]: employee2,
          [getFirstObjectKey(employeesArray[i])]: schedule2,
        },
      } = employeesArray;

      // schedule 1 and schedule 2 are the schedules of the employees
      // employee 1 y employee 2 are the names of the employees

      const coincidences = checkCoincidences(schedule1, schedule2);

      const employeesNamesJ = getFirstObjectKey(employeesArray[j]);
      const employeeNamesI = getFirstObjectKey(employeesArray[i]);

      if (employee1 !== employee2) {
        console.table(
          `${employeesNamesJ} - ${employeeNamesI} ----> coincidencias ${coincidences}`
        );
      }
    });
  });
};

const typesOfData = (data) => {
  if (typeof data == "string") return false;
  if (typeof data == "object") return true;

  return false;
};

const filenameTxt = (arg) => {
  if (arg === "./documents/employees.txt") {
    return "./documents/employees.txt";
  } else {
    return arg;
  }
};

module.exports = {
  checkCoincidences,
  IterationOfNames,
  parseDocumentData,
  typesOfData,
  filenameTxt,
};
