// =====================================================
// 1️⃣ OBJECT DECLARATION
// =====================================================

let obj = {
  name: "Sanorita",
  age: 19,
  isMarried: false,
};

console.log(obj);



// =====================================================
// 2️⃣ OBJECT WITH METHODS
// =====================================================

let car = {
  brand: "lamborgini",
  color: "red",
  maxSpeed: 180,
  "full name": "manas kumar lal",

  stop: () => {
    console.log("stopping the car...");
  },

  start: function () {
    console.log("starting the car...");
  },
};

// Access
console.log(car.brand);
car.start();
car.stop();

// Bracket notation
let test = "full name";
console.log(car["brand"]);
console.log(car[test]);



// =====================================================
// 3️⃣ OBJECT CONSTRUCTOR
// =====================================================

let obj1 = new Object({
  name: "manas",
});

let obj2 = {
  falna: "laskjdf",
  dhikna: "ldkjfldsf",
};

// Add properties
obj1.age = 19;
obj2.gamma = "something";

console.log(obj1);
console.log(obj2);



// =====================================================
// 4️⃣ UPDATE & DELETE
// =====================================================

let person = {
  name: "manas",
  age: 23,
};

person.name = "Manas Kumar Lal"; // update
person.city = "bhagalpur";      // add

delete person.age;              // delete

console.log(person);



// =====================================================
// 5️⃣ OBJECT COPY
// =====================================================

let original = {
  name: "alpha",
  age: 24,
};

let copy = {};
let copy1 = {...original}
Object.assign(copy, original);

console.log(copy);



// =====================================================
// 6️⃣ OBJECT METHODS
// =====================================================

let sample = {
  name: "alpha",
  age: 24,
};

// Returns an array of keys (property names)
console.log(Object.keys(sample)); 
// Output: ["name", "age"]

// Returns an array of property values
console.log(Object.values(sample)); 
// Output: ["alpha", 24]

// Returns an array of [key, value] pairs (nested arrays)
console.log(Object.entries(sample)); 
// Output: [["name", "alpha"], ["age", 24]]

// Loops through the object's keys and accesses values using bracket notation
for (let key in sample) {
  console.log(sample[key]);
}
// Output:
// alpha
// 24



// =====================================================
// 7️⃣ FREEZE & SEAL
// =====================================================

let freezeObj = {
  name: "alpha",
  age: 24,
};

Object.freeze(freezeObj);

// ❌ No change allowed
freezeObj.city = "bhagalpur";
delete freezeObj.name;

console.log(freezeObj);


// Seal
Object.seal(freezeObj);

// ✔ Can update
freezeObj.name = "updated";

// ❌ Cannot add/delete
freezeObj.city = "test";



// =====================================================
// 8️⃣ PROPERTY CHECK
// =====================================================

console.log(freezeObj.hasOwnProperty("name"));



// =====================================================
// 9️⃣ DESTRUCTURING
// =====================================================

let user = {
  name: "mkl",
  city: "bgp",
  age: 24,
};


// should be same key 
let { name, city, age } = user;

console.log(name, city, age);



// =====================================================
// 🔟 ARRAY + OBJECT DESTRUCTURING
// =====================================================

let arr = [1, "text", { name: "something" }];

let [, , objData] = arr;

console.log(objData);



// =====================================================
// 1️⃣1️⃣ PRACTICE QUESTION — MODIFY OBJECT
// =====================================================

let personQ = {
  name: "mkl",
  age: 19,
  city: "patna",
};

personQ.email = "example@gmail.com";
delete personQ.city;

for (let key in personQ) {
  console.log(`Value of ${key} is ${personQ[key]}`);
}



// =====================================================
// 1️⃣2️⃣ QUESTION — FULL NAME FROM OBJECT
// =====================================================

let nameObj = {
  firstName: "manas",
  middleName: "kumar",
  lastName: "lal",
};

function convertToFullName(param) {
  return `${param.firstName} ${param.middleName} ${param.lastName}`;
}

console.log(convertToFullName(nameObj));



// =====================================================
// 1️⃣3️⃣ QUESTION — COUNT KEYS
// =====================================================

let countObj = {
  name: "test",
  age: 24,
  city: "bgp",
  isMarried: true,
};

               // this will give array of keys..
let noOfKeys = Object.keys(countObj).length;
console.log(noOfKeys);



// =====================================================
// 1️⃣4️⃣ QUESTION — FILTER OBJECT ARRAY
// =====================================================

let users = [
  { name: "a", role: "admin" },
  { name: "b", role: "user" },
  { name: "c", role: "admin" },
  { name: "d", role: "superAdmin" },
];

function filterArray(arr, role) {
  let filtered = arr.filter((item) => item.role === role);

  return filtered.map((item) => item.name);
}

console.log(filterArray(users, "superAdmin"));



// =====================================================
// 1️⃣5️⃣ QUESTION — SEARCH PRODUCT
// =====================================================

let products = [
  { id: 1, name: "samsung Galaxy" },
  { id: 2, name: "poco m24" },
  { id: 3, name: "apple m2" },
];

function search(products, keyword) {
  let result = products.filter((obj) =>
    obj.name.toLowerCase().includes(keyword.toLowerCase())
  );

  console.log(result);
}

search(products, "2");



// =====================================================
// 1️⃣6️⃣ QUESTION — GROUP COMMENTS BY POST
// =====================================================

let comments = [
  { postId: 1, comment: "hello" },
  { postId: 2, comment: "awesome video bhaiya" },
  { postId: 1, comment: "how are you" },
];

function groupByPost(comments) {
  let groupedComments = {};

  comments.forEach((obj) => {
    let { postId, comment } = obj;

    if (groupedComments.hasOwnProperty(postId)) {
      groupedComments[postId].push(comment);
    } else {
      groupedComments[postId] = [comment];
    }
  });

  console.log(groupedComments);
}

groupByPost(comments);



// =====================================================
// 1️⃣7️⃣ QUESTION — CREATE URL FROM OBJECT
// =====================================================

let params = {
  search: "alpha",
  page: 2,
  sort: "asc",
};

function createUrl(params) {
  let url = "";

  for (let key in params) {
    url += `${key}=${params[key]}&`;
  }

  return url.slice(0, -1);
}

console.log(createUrl(params));
