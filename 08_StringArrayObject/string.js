// =====================================================
// 1️⃣ STRING DECLARATION & CONCATENATION
// =====================================================

let firstName = "Manas";
let middleName = "Kumar";
let lastName = "Lal";

// Normal concatenation
let fullName = firstName + " " + middleName + " " + lastName;
console.log(fullName);

// Template literals
let fullName2 = `${firstName} ${middleName} ${lastName}`;
console.log(fullName2);

console.log(`My name is ${fullName}`);



// =====================================================
// 2️⃣ TEMPLATE LITERALS WITH EXPRESSIONS
// =====================================================

let a = 10;
let b = 20;
let c = 30;

let strNumbers = `Number 1 = ${a} Number 2 = ${b} Number 3 = ${c}`;
console.log(strNumbers);

let gamma = `Result = ${2 + 3 + 5 + 8 - 9}`;
console.log(gamma);



// =====================================================
// 3️⃣ STRING OBJECT vs STRING PRIMITIVE
// =====================================================

let strObj = new String("Manas");
console.log(strObj);



// =====================================================
// 4️⃣ ESCAPE CHARACTERS
// =====================================================

let str1 = "school4u";
let str2 = "school\n4u";     // New line
let str3 = "Hello \\n beta"; // Prints \n

console.log(str1, str1.length);
console.log(str2, str2.length);
console.log(str3, str3.length);



// =====================================================
// 5️⃣ ACCESSING CHARACTERS
// =====================================================

let str = "hello world";

console.log(str[1]);
console.log(str[5]);
console.log(str[7]);

// Strings are immutable
str[7] = "u";   // No change
console.log(str);



// =====================================================
// 6️⃣ LOOPING THROUGH STRING
// =====================================================

// Add space between characters
let spaced = "";

for (let ch of str) {
  spaced = spaced + ch + " ";
}
console.log(spaced);

// for...in → index
for (let key in str) {
  console.log(key);
}



// =====================================================
// 7️⃣ BASIC STRING METHODS
// =====================================================

let text = "Hello";

console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.trim());



// =====================================================
// 8️⃣ CONCAT METHOD
// =====================================================

let fName = "manas";
let mName = "kumar";
let lName = "lal";

let name1 = fName + mName + lName;
let name2 = fName.concat(mName, lName);

console.log(name1);
console.log(name2);



// =====================================================
// 9️⃣ SEARCH METHODS
// =====================================================

let sentence = "I am a boy, and i am a boy";

console.log(sentence.includes("bts")); // true/false
console.log(sentence.indexOf("boy"));
console.log(sentence.charAt(2));



// =====================================================
// 🔟 REPLACE METHODS
// =====================================================

console.log(sentence.replace("boy", "girl"));
console.log(sentence.replaceAll("boy", "girl"));



// =====================================================
// 1️⃣1️⃣ SLICE vs SUBSTRING
// =====================================================

let username = "@manaskumarlal";

console.log(username.slice(-8, 11));
console.log(username.substring(-8, 11));



// =====================================================
// 1️⃣2️⃣ SPLIT METHOD
// =====================================================

let words = "alpha beta gamma";

console.log(words.split(" "));



// =====================================================
// 1️⃣3️⃣ PRACTICE — REPLACE WORD
// =====================================================

let line = "i am a boy";

line = line.replace("boy", "girl");
console.log(line);



// =====================================================
// 1️⃣4️⃣ QUESTION — USERNAME GENERATOR
// =====================================================

// Input: full name
// Output: @name_length

let fullNameInput = "Manas Kumar Lal";

let generatedUsername =
  `@${fullNameInput.trim().replaceAll(" ", "")}_${fullNameInput.length}`;

console.log(generatedUsername);



// =====================================================
// 1️⃣5️⃣ QUESTION — CHARACTER COUNT
// =====================================================

let sampleStr = "hello world";
let ch = "l";

let count = 0;

for (let val of sampleStr) {
  if (val.toLowerCase() === ch.toLowerCase()) {
    count++;
  }
}

console.log("Count =", count);



// =====================================================
// 1️⃣6️⃣ QUESTION — WORD COUNT
// =====================================================

let longStr = "hello i am a boy alsdjf ldsjflds f";

let wordCount = longStr.split(" ").length; // array.length()

console.log("Total words =", wordCount);
