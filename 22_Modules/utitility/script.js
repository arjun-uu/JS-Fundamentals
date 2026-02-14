// const {sum, subtract} = require('../math.js') // common js import

import sumFunc, {subtract as subFunc, multiply, divide, modulo} from '../math.js'

console.log(sumFunc(1,2));  
console.log(multiply(1,2));
console.log(divide(1,2));
console.log(modulo(1,2));

console.log(subFunc(1,2))