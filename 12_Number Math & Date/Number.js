

// ================================================================
// 1️⃣ Number Types in JavaScript
// ================================================================

// BigInt → Used for very large integers
let bigNum = 1234234234n;

// Normal floating point number
let floatNum = 1234.23423;

console.log(typeof bigNum);
console.log(typeof floatNum);

/*
OUTPUT:
bigint
number
*/


// ================================================================
// 2️⃣ Number Object Creation
// ================================================================

// Creating number using constructor
let numObj = new Number('13241234');

console.log(numObj);

/*
OUTPUT:
[Number: 13241234]

⚠️ Returns a Number Object, not primitive number
typeof numObj → "object"
*/


// ================================================================
// 3️⃣ Not-a-Number (NaN)
// ================================================================

// Invalid mathematical operation
let invalid = 0 / 0;

console.log(invalid);  // NaN



// ================================================================
// 4️⃣ Number Constants / Properties
// ================================================================

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

/*
OUTPUT \
1.7976931348623157e+308   → Largest possible number
5e-324                    → Smallest positive number
Infinity
-Infinity
NaN
*/


// ================================================================
// 5️⃣ Checking NaN Properly
// ================================================================

console.log(Number.isNaN(invalid));

/*
OUTPUT:
true

✔️ Recommended way to check NaN
*/


// ================================================================
// 6️⃣ EPSILON (Precision Difference)
// ================================================================

// Smallest difference between two representable numbers
console.log(Number.EPSILON);

/*
OUTPUT:
2.220446049250313e-16

Used in floating point precision comparisons
*/


// ================================================================
// 7️⃣ Parsing Numbers from Strings
// ================================================================

let strNum = '123.834px';

// Extract integer
console.log(Number.parseInt(strNum));

// Extract float
console.log(parseFloat(strNum));

/*
OUTPUT:
123
123.834

✔️ Stops reading when non-numeric value appears
*/


// ================================================================
// 8️⃣ Checking Finite Numbers
// ================================================================

let infiniteNum = 1 / 0;

console.log(Number.isFinite(infiniteNum));
console.log(isFinite(infiniteNum));

/*
OUTPUT:
false
false

✔️ Checks whether value is finite or Infinity/NaN
*/


// ================================================================
// 9️⃣ Number Formatting Methods
// ================================================================

let num = 123.12545678;


// ------------------------------------------------
// toFixed() → Fixed decimal places
// ------------------------------------------------
console.log(num.toFixed(4));

/*
OUTPUT:
123.1255

✔️ Rounds the value
Returns string
*/


// ------------------------------------------------
// toExponential() → Scientific notation
// ------------------------------------------------
console.log(num.toExponential(3));

/*
OUTPUT:
1.231e+2
*/


// ------------------------------------------------
// toPrecision() → Total digits precision
// ------------------------------------------------
console.log(num.toPrecision(2));

/*
OUTPUT:
1.2e+2
*/


// ------------------------------------------------
// toString() → Convert number to string
// ------------------------------------------------
console.log(num.toString());

/*
OUTPUT:
"123.12545678"
Type → string
*/


// ================================================================
// 🔟 String Object vs Primitive String
// ================================================================

let numStrObj = new String('12345');

console.log(numStrObj);
console.log(numStrObj.valueOf());

/*
OUTPUT:
[String: '12345']
12345

valueOf() → Returns primitive string value
*/


