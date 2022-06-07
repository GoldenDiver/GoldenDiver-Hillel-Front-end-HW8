const math = require("./math");
const a = 1;
const b = 2;

console.log('file_1: ', math.sum(a, b), math.subtract(b, a));

const course = require("./api");
console.log('file_2: ');
course;


const sqr = require("./sqr");
console.log('file_3: ', sqr.sqr(b));

