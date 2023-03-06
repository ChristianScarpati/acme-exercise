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
const checkCoincidences = (array1, array2) =>
  array1.filter((element) => array2.includes(element)).length;

const getFirstObjectKey = (object) => {
  return Object.keys(object)[0];
};

const printResult = (employee1, employee2, coincidences) => {
  if (employee1 !== employee2) {
    console.table(`${employee1} - ${employee2} ----> coincidencias ${coincidences}`);
  }
};

const IterationOfNames = (employeesArray) => {
  const employeeSchedules = employeesArray[0][getFirstObjectKey(employeesArray[0])];

  employeeSchedules.forEach((_, j) => {
    const employee1Name = getFirstObjectKey(employeesArray[j]);
    const employee1Schedule = employeesArray[j][employee1Name];

    employeeSchedules.forEach((_, i) => {
      const employee2Name = getFirstObjectKey(employeesArray[i]);
      const employee2Schedule = employeesArray[i][employee2Name];

      const coincidences = checkCoincidences(employee1Schedule, employee2Schedule);

      printResult(employee1Name, employee2Name, coincidences);
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
