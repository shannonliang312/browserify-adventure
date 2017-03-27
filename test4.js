let obj = require('./ndjson');

console.log(obj.parse(prompt()));
console.log(obj.stringify(prompt()));