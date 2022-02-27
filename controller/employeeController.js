const { regExpTimes: getTimes, regExpNames: getNames } = require('../utils/global.js')

//convert the data to data Array
const returnDataOnArray = (data) => {
     let arrayData = []
     let array = data.toString().split('\n')
     for (i in array) {
          const names = array[i].match(getNames)[0]
          try {
               const timeWorked = array[i].match(getTimes)[0]
               const arrayOfTime = timeWorked.split(',')
               arrayData.push({ [names]: arrayOfTime })
          } catch (error) {
               console.error('An error has occured with the data names.')
          }
     }
     return arrayData
}

//check the coincidence between employees
const checkCoincidences = (array1, array2) => {
     const mapObject = {};
     let coincidences;

     array1.forEach(i => mapObject[i] = false);
     array2.forEach(i => mapObject[i] === false && (mapObject[i] = true));

     coincidences = Object.keys(mapObject)
          .map(k => ({ name: k, matched: mapObject[k] }))
          .filter(x => x.matched == true);

     return coincidences.length
}

// Nested Loop of employees.
const IterationOfNames = (employeesArray) => {

     const employeeSchedules = employeesArray[0][Object.keys(employeesArray[0])]

     for (let j = 0; j < employeeSchedules.length; j++) { 
          for (let i = 0; i < employeeSchedules.length; i++) { 
               
               const employee1 = Object.keys(employeesArray[j])[0]
               const employee2 = Object.keys(employeesArray[i])[0]

               const schedule1 = employeesArray[j][Object.keys(employeesArray[j])]
               const schedule2 = employeesArray[i][Object.keys(employeesArray[i])]

               const coincidences = checkCoincidences(schedule1, schedule2)

               if (employee1 !== employee2) {
                    console.table(`${employee1} - ${employee2} ----> coincidencias ${coincidences}`)
               }
          }
     }

}


const typesOfData = (data) => {
     if (typeof data == 'string') return false
     if (typeof data == 'object') return true

     return false
}

const filenameTxt = (arg) => {
     if (arg === './documents/employees.txt') {
          return ('./documents/employees.txt')
     } else {
          return arg
     }
}




module.exports = { checkCoincidences, IterationOfNames, returnDataOnArray, typesOfData, filenameTxt }

