// 1. Object Literal
// Best for single, one-off objects. Not great for creating multiple instances.
let studentLiteral = {
  myName: "MKL",
  age: 21,
  passion: 'bkaiti',
  introduceMySelf: function () {
    // 'this' refers to the object itself
    console.log(`${this.myName}, ${this.age}, ${this.passion}`);
  }
};
studentLiteral.introduceMySelf();


// 2. Factory Function
// A function that returns a new object. Avoids the 'new' keyword and handles logic internally.
function createStudent(name, age, passion) {
  return {
    myName: name,
    age: age, // Shorthand: just 'age' works if key and variable names match
    passion: passion,
    introduceMySelf: function () {
      console.log(`${this.myName}, ${this.age}, ${this.passion}`);
    }
  };
}
let fs1 = createStudent("Muskan", 19, "cooking");
let fs2 = createStudent("Sanorita", 19, "bkaiti");
fs1.introduceMySelf();


// 3. Constructor Function
// Conventionally starts with a Capital letter. Must be called with the 'new' keyword.
// 'new' creates a blank object, sets 'this' to it, and returns it automatically.
function StudentConstructor(name, age, passion) {
  this.name = name;
  this.age = age;
  this.passion = passion;
  // No return statement needed; 'new' handles it.
}
let cs1 = new StudentConstructor("mkl", 21, 'bkaiti');
let cs2 = new StudentConstructor("muskan", 22, 'cooking');
console.log(cs1);
console.log(cs2); 


// 4. Class Syntax (ES6)
// Modern "syntactic sugar" over prototypes. Cleaner and more organized for OOP.
class Student {
  // Runs automatically when 'new Student()' is called
  constructor(name, age, passion) {
    this.name = name;
    this.age = age;
    this.passion = passion;
    console.log("Constructor called!");
  }

  // Method defined outside the constructor is added to the prototype (memory efficient)
  introduceMyself() {
    console.log(this.name, this.age, this.passion);
  }
}

let s1 = new Student("mkl", 21, 'bkaiti');
s1.introduceMyself();
