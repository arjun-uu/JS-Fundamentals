/*

Math → Built-in object in JavaScript
Used for mathematical calculations

Important:
• No constructor → cannot use new Math()
• All methods are static → Math.method()
====================================================================
*/


// ================================================================
// 1️⃣ Math.floor() → Round Down
// ================================================================

// Returns nearest smaller integer

console.log(Math.floor(1));
console.log(Math.floor(1.5));
console.log(Math.floor(1.9));
console.log(Math.floor(2.6));
console.log(Math.floor(-2.6));

/*
OUTPUT:
1
1
1
2
-3

✔️ Negative numbers go more down (towards −∞)
*/


// ================================================================
// 2️⃣ Math.ceil() → Round Up
// ================================================================

// Returns nearest greater integer

console.log(Math.ceil(1));
console.log(Math.ceil(1.5));
console.log(Math.ceil(1.9));
console.log(Math.ceil(2.6));
console.log(Math.ceil(-2.6));

/*
OUTPUT:
1
2
2
3
-2

✔️ Negative numbers go up (towards +∞)
*/


// ================================================================
// 3️⃣ Math.abs() → Absolute Value
// ================================================================

// Removes negative sign

console.log(Math.abs(-3));
console.log(Math.abs(3));
console.log(Math.abs(0));
console.log(Math.abs(-0));

/*
OUTPUT:
3
3
0
0
*/


// ================================================================
// 4️⃣ Math.sqrt() → Square Root
// ================================================================

console.log(Math.sqrt(9));

/*
OUTPUT:
3
*/


// ================================================================
// 5️⃣ Math.pow() → Power
// ================================================================

// Syntax → Math.pow(base, exponent)

console.log(Math.pow(2, 6));

/*
OUTPUT:
64
*/


// ================================================================
// 6️⃣ Math.min() → Smallest Value
// ================================================================

console.log(Math.min(2, 3, 43, 5, 43, 53, 46, 436));

/*
OUTPUT:
2
*/


// ================================================================
// 7️⃣ Math.max() → Largest Value
// ================================================================

console.log(Math.max(2, 3, 43, 5, 43, 53, 46, 436));

/*
OUTPUT:
436
*/


// ================================================================
// 8️⃣ Math.random() → Random Number
// ================================================================

// Returns random decimal between 0 → 1  0(included) 1(excluded)

console.log(Math.random());

/*
OUTPUT:
0.0xxxx (varies every time)
*/


// ================================================================
// 9️⃣ Custom Random Integer Function
// ================================================================

/*
Generate random integer between min and max (inclusive)
Formula Explanation:

Math.random() → 0 to 1
* (max - min + 1) → range size
+ min → shift to min value
*/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10));

/*
OUTPUT:
Random number between 1 and 10
Example → 4 / 7 / 10 / 2 (varies every run)
*/

