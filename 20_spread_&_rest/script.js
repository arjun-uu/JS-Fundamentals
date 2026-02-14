/*
===============================================================

Both Spread (...) and Rest (...) use the same syntax
but their use-case is different.

SPREAD  → Expands values
REST    → Collects values

=============================================================
*/


// =============================================================
// 1️⃣ Checking Spread with Array
// =============================================================

let arr1 = [1, 2, 3, 4, 5];

// Spread expands array elements
let newArr = [...arr1, 10, 99, 'manas'];

console.log("Original Array:", arr1);
// Output: Original Array: [1, 2, 3, 4, 5]

console.log("New Array:", newArr);
// Output: New Array: [1, 2, 3, 4, 5, 10, 99, "manas"]


// =============================================================
// 2️⃣ Shallow Copy vs Deep Copy
// =============================================================

/*
Shallow Copy:
- Copies only first level
- Nested objects still share reference

Deep Copy:
- Completely independent copy
- No shared references
*/

let originalArr = [1, 2, 3];

// Shallow copy using spread
let copyArr = [...originalArr];

copyArr.push(5);

console.log("Copied Array:", copyArr);
// Output: Copied Array: [1, 2, 3, 5]

console.log("Original Array:", originalArr);
// Output: Original Array: [1, 2, 3]


// =============================================================
// 3️⃣ Merge Two Arrays
// =============================================================

let heroes1 = ['captain', 'dost'];
let heroes2 = ['iron man', 'spider man'];

let mergedArr = [...heroes1, ...heroes2];

console.log("Merged Array:", mergedArr);
// Output: Merged Array: ["captain", "dost", "iron man", "spider man"]


// =============================================================
// 4️⃣ Spread String
// =============================================================

/*
Strings are iterable
So spread converts string → character array
*/

let str = 'Manas Kumar Lal';
let strArr = [...str];

console.log("String to Array:", strArr);
/*
Output: String to Array:
[
 "M","a","n","a","s"," ",
 "K","u","m","a","r"," ",
 "L","a","l"
]
*/


// =============================================================
// 5️⃣ Spread in Function Call
// =============================================================

let users = ['manas', 'muskan', 'mehek'];

function consoleThreeUsers(user1, user2, user3) {
  console.log("User 1:", user1);
  console.log("User 2:", user2);
  console.log("User 3:", user3);
}

// Spread passes array values as arguments
consoleThreeUsers(...users);

/*
Output:
User 1: manas
User 2: muskan
User 3: mehek
*/


// =============================================================
// 6️⃣ Spread with Objects
// =============================================================

let person = {
  name: 'Manas',
  age: 21,
  passion: 'bkaiti',
  city: 'bhagalpur',
};

// Copy + Override + Add properties
let personCopy = {
  ...person,
  age: 22,
  passion: 'teaching',
  lifePartner: 'muskan',
};

console.log("Person Copy:", personCopy);

/*
Output:
Person Copy: {
  name: "Manas",
  age: 22,
  passion: "teaching",
  city: "bhagalpur",
  lifePartner: "muskan"
}
*/


// =============================================================
// 7️⃣ Merge Two Objects
// =============================================================

let obj1 = {
  name: 'manas',
  age: 21,
};

let obj2 = {
  name2: 'muskan',
  age2: 19,
};

let mergedObject = {
  ...obj1,
  ...obj2,
};

console.log("Merged Object:", mergedObject);

/*
Output:
Merged Object: {
  name: "manas",
  age: 21,
  name2: "muskan",
  age2: 19
}
*/


// =============================================================
// 8️⃣ Rest Operator in Function Parameter
// =============================================================

/*
Rest collects multiple arguments into array
Useful when number of inputs is unknown
*/

function sum(...numbers) {
  console.log("Numbers Array:", numbers);
  // Output: Numbers Array: [1,2,3,4,5,6,7,8,99,100]

  let sumResult = numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return sumResult;
}

let output = sum(1, 2, 3, 4, 5, 6, 7, 8, 99, 100);

console.log("Sum:", output);
// Output: Sum: 235


// =============================================================
// 9️⃣ Rest with Array Destructuring
// =============================================================

let usersList = [
  "manas",
  "muskan",
  "mehek",
  "harshit",
  "rishav",
  "sourav",
];

let [first, second, third, ...otherUsers] = usersList;

console.log("First:", first);
// Output: First: manas

console.log("Second:", second);
// Output: Second: muskan

console.log("Third:", third);
// Output: Third: mehek

console.log("Others:", otherUsers);
// Output: Others: ["harshit","rishav","sourav"]


// =============================================================
// 🔟 Rest with Object Destructuring
// =============================================================

let userObj = {
  name: 'manas',
  age: 21,
  city: 'bhagalpur',
  passion: 'bkaiti',
};

let { name, age, ...otherDetails } = userObj;

console.log("Name:", name);
// Output: Name: manas

console.log("Age:", age);
// Output: Age: 21

console.log("Other Details:", otherDetails);
/*
Output:
Other Details: {
  city: "bhagalpur",
  passion: "bkaiti"
}
*/


/*
=============================================================
🧠 Key Interview Points
=============================================================

1️⃣ Spread → Expands elements
   Example: [...arr]

2️⃣ Rest → Collects elements
   Example: function sum(...nums)

3️⃣ Spread works on:
   • Arrays
   • Objects
   • Strings
   • Function calls

4️⃣ Rest works in:
   • Function parameters
   • Array destructuring
   • Object destructuring

5️⃣ Spread makes shallow copy only

=============================================================
*/
