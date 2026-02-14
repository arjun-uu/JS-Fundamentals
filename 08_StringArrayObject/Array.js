// =====================================================
// 1️⃣ ARRAY DECLARATION
// =====================================================

let arr1 = [4, 5, 10, 23];
let arr2 = ["apple", "mango", "lichi"];
let arr3 = ["manas", 15, "bhagalpur"];
let arr4 = [2, 3, 4, "mkl", [2, 3, 5]];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);



// =====================================================
// 2️⃣ ARRAY CONSTRUCTOR
// =====================================================

let normalArr = [1, 3, 5];
console.log(normalArr);

// ⚠️ Avoid this confusion
// let arr = new Array(2,3,4)

let arr = [20];
let carr = new Array(20).fill(0);

console.log(arr);     // [20]
console.log(carr);    // 20 zeros

console.log(arr.length);
console.log(typeof arr);



// =====================================================
// 3️⃣ ACCESS & UPDATE ELEMENTS
// =====================================================

let nums = [1, 3, 5, 8];

console.log(nums[0]);
console.log(nums[2]);

nums[2] = 99;
nums[0] = 100;

console.log(nums);



// =====================================================
// 4️⃣ LOOPING METHODS
// =====================================================

let loopArr = [1, 3, 5, 100, 99];

// for loop
for (let i = 0; i < loopArr.length; i++) {
  console.log(loopArr[i] * 2);
}

// for...of → values
for (let elem of loopArr) {
  console.log(elem);
}

// for...in → index
for (let ind in loopArr) {
  console.log(ind);
}



// =====================================================
// 5️⃣ BASIC ARRAY METHODS
// =====================================================

let arrBasic = [2, 5, "mkl", 5, 8, 10];

arrBasic.push(999);     // add end
arrBasic.pop();         // remove end

arrBasic.unshift(7);   // add start
arrBasic.shift();      // remove start

console.log(arrBasic);



// =====================================================
// 6️⃣ SLICE & SPLICE
// =====================================================

// Original array
const fruit = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log("Original array:", fruits);


// slice() extracts a portion of an array into a new array without modifying the original.
// Syntax: array.slice(startIndex, endIndex (exclusive))
const slicedFruits = fruit.slice(1, 4); 

console.log("\nAfter slice(1, 4):");
console.log("Sliced array (new):", slicedFruits); // Output: ["Orange", "Apple", "Mango"]
console.log("Original array remains unchanged:", fruit); // Output: ["Banana", "Orange", "Apple", "Mango", "Kiwi"]


// splice() changes the contents of the original array by removing, replacing, or adding elements.
// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
const removedFruits = fruit.splice(1, 2, "Lemon", "Grape"); 
// Starts at index 1, removes 2 items ("Orange", "Apple"), and adds "Lemon", "Grape"

console.log("\nAfter splice(1, 2, 'Lemon', 'Grape'):");
console.log("Removed items (new array returned by splice):", removedFruits); // Output: ["Orange", "Apple"]
console.log("Original array is modified:", fruit); // Output: ["Banana", "Lemon", "Grape", "Mango", "Kiwi"]



// =====================================================
// 7️⃣ CONCAT & SPREAD
// =====================================================

let a1 = [1, 2];
let a2 = [5, 6];
let a3 = ["mkl", "falna"];

let concatArr = a1.concat(a2, a3);
console.log(concatArr);

// Spread
let spreadArr = [...a1, ...a2, ...a3];
console.log(spreadArr);



// =====================================================
// 8️⃣ STRING METHODS ON ARRAYS
// =====================================================

let fruits = ["mango", "litchi", "guava", "papita"];

// 1. Joins elements with a custom separator " And "
let joined = fruits.join(" And ");
console.log(joined); 
// Output: "mango And litchi And guava And papita"

// 2. Checks if "litchi" exists in the array
console.log(fruits.includes("litchi")); 
// Output: true

// 3. Converts the entire array into a comma-separated string
let str = fruits.toString();
console.log(str); 
// Output: "mango,litchi,guava,papita"

// 4. Returns the first index where "litchi" is found
console.log(fruits.indexOf("litchi")); 
// Output: 1

// 5. Reverses the elements of the array (modifies the original)
fruits.reverse();
console.log(fruits); 
// Output: ["papita", "guava", "litchi", "mango"]




// =====================================================
// 9️⃣ FIND & FLAT
// =====================================================

// Current fruits array: ["papita", "guava", "litchi", "mango"]

// 1. find() -> Returns the first element that satisfies the condition
let findTest = fruits.find((item) => item === "mango");
console.log(findTest);
// Output: "mango"


// 2. flat(Infinity) -> Flattens nested arrays into a single-level array
let heroes = ["spiderman", ["hulk", "hawkeye", ["thor"]]];
console.log(heroes.flat(Infinity));
// Output: ["spiderman", "hulk", "hawkeye", "thor"]



// =====================================================
// 🔟 SORTING
// =====================================================

let numbers = [10, 5, 1, 20];
numbers.sort((a, b) => a - b); // Ascendinig
numbers.sort((a, b) => b - a); // Descending
console.log(numbers);

let heroNames = ["spiderman", "ironman", "hulk"];
heroNames.sort();
console.log(heroNames);



// =====================================================
// 1️⃣1️⃣ MAP / FOREACH / FILTER / REDUCE
// =====================================================

let arrOps = [1, 2, 5, 9, 10];

// MAP
let mapped = arrOps.map((elem) => elem * 2);
console.log(mapped);

// FOREACH (mutates)
arrOps.forEach((elem, index) => {
  arrOps[index] = elem * 2;
});

// FILTER
let filtered = arrOps.filter((elem) => elem > 5);
console.log(filtered);

// REDUCE
let sum = arrOps.reduce((acc, curr) => acc + curr, 0);
console.log(sum);



// =====================================================
// 1️⃣2️⃣ SHALLOW COPY
// =====================================================

let original = [1, 2, 3];
let refCopy = original;
let spreadCopy = [...original];

spreadCopy.pop();

console.log(original);
console.log(spreadCopy);



// Nested copy issue
let nested = [1, 2, 3, [99, 100]];
let copyNested = [...nested];

copyNested[3].push(23);

console.log(nested);
console.log(copyNested);



// =====================================================
// 1️⃣3️⃣ PRACTICE QUESTIONS
// =====================================================

// Sum & Average
let qArr = [5, 10, 15, 7];

let total = qArr.reduce((acc, curr) => acc + curr);
let avg = total / qArr.length;

console.log(total, avg);


// Fill 1 → N
let n = 25;
let fillArr = new Array(n).fill(0);

fillArr.forEach((_, i) => {
  fillArr[i] = i + 1;
});

console.log(fillArr);



// =====================================================
// 1️⃣4️⃣ ARRAY UTILITIES
// =====================================================

console.log(Array.isArray("test"));  //Determines whether the passed value is an Array. (True/False)

console.log(Array.from("hello"));  //['h', 'e', 'l', 'l', 'o']

console.log(Array.of(1, "abc", { name: "manas" }, [1, 2]));  //[1, "abc", { name: "manas" }, [1, 2]]



// =====================================================
// 1️⃣5️⃣ STRING  QUESTIONS
// =====================================================

// Palindrome
let str1 = "ollo";
let rev = Aarray.from(str1).reverse().join(""); // reverse a string
let rev1 = str1.split("").reverse().join(""); // reverse a string

console.log(str1 === rev ? "Palindrome" : "Not Palindrome");


// Capitalize Each Words
let sentence = "hello how are you";

let cap = sentence
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(cap);
