const { expect, describe } = require('@jest/globals')
const employeeControllers = require('../controller/employeeController')

////////////////////////////////////////////////////////////////////////////
const data =
     "RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00\n" +
     "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00,MO12:00-12:00\n" +
     "ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00\n" +
     "AGUSTIN=MO12:00-12:00,TH12:00-14:00,SU20:00-21:00\n" +
     "DARKO=TH012:00-03:00, SA14:00-18:00,TH12:00-14:00,MO12:00-12:00"

const dataArray = [
     'MO10:00-12:00',
     'TU10:00-12:00',
     'TH01:00-03:00',
     'SA14:00-18:00',
     'SU20:00-21:00'
]
////////////////////////////////////////////////////////////////////////////

describe("Types of Data", () => {
     test('should be false when the data is a string', () => {
          const isAString = employeeControllers.typesOfData(data)
          expect(isAString).toBeFalsy()
     })
     test('Data should return an object', () => {
          const isAnObject = employeeControllers.typesOfData(dataArray)
          expect(isAnObject).toBeTruthy()
     })
})

describe('general tests', () => {
     test('FilenameTxt should receive its info in ./documents/employees.txt', () => {
          let filenameObtainedFrom = './documents/employees.txt'
          expect(employeeControllers.filenameTxt('./documents/employees.txt')).toBe(filenameObtainedFrom)
     })
     test('should return an array length of employee data equal to 5', () => {
          const employeersLength = employeeControllers.returnDataOnArray(data)
          expect(employeersLength.length).toEqual(5)
     })
})

