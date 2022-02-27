//create Regex
const getTimes = '(?<==).+'
const getNames = /.+?(?==)/;

// New Regex constructor
const regExpTimes = new RegExp(getTimes, 'g')
const regExpNames = new RegExp(getNames, 'g')

module.exports.regExpTimes = regExpTimes
module.exports.regExpNames = regExpNames




