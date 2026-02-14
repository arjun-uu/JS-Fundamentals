///////////////////////////////////////////////////////////////
// 🔶 1. OBJECT DESTRUCTURING (Basic + Nested)
///////////////////////////////////////////////////////////////

let person = {
    name: 'Manas Kumar Lal',
    streetAddress: 'Tanti Bazar Road',
    isMarried: false,
    address: {
        city: 'Bhagalpur',
        pincode: 812004,
    }
};

// Normal way (without destructuring)
// let name = person.name;
// let add = person.streetAddress;
// let isMarried = person.isMarried;


// ✅ Destructuring way
let { name, streetAddress, isMarried, address: { pincode } } = person;

console.log(name);           
// Output → Manas Kumar Lal

console.log(streetAddress);  
// Output → Tanti Bazar Road

console.log(isMarried);      
// Output → false

console.log(pincode);        
// Output → 812004



///////////////////////////////////////////////////////////////
// 🔶 2. ARRAY DESTRUCTURING (Basic)
///////////////////////////////////////////////////////////////

let arr1 = [1, 2, 3];

let [a, b, c] = arr1;

console.log(a, b, c);
// Output → 1 2 3



///////////////////////////////////////////////////////////////
// 🔶 3. BASIC ARRAY DESTRUCTURING
///////////////////////////////////////////////////////////////

let arr2 = [1, 2, 3, 'manas', false];

let [first, second, third] = arr2;

console.log(first);   
// Output → 1

console.log(second);  
// Output → 2

console.log(third);   
// Output → 3



///////////////////////////////////////////////////////////////
// 🔶 4. DESTRUCTURING WITH REST OPERATOR (...)
///////////////////////////////////////////////////////////////

let arr3 = [1, 2, 3, 'manas', false];

let [f, s, t, ...others] = arr3;

console.log(f);        
// Output → 1

console.log(s);        
// Output → 2

console.log(t);        
// Output → 3

console.log(others);   
// Output → ['manas', false]



///////////////////////////////////////////////////////////////
// 🔶 5. DEFAULT VALUES
///////////////////////////////////////////////////////////////

// If value not present → default used

let [x1, y1, z1, d1 = 0] = [5, 10, 15, 20];

console.log(x1, y1, z1, d1);
// Output → 5 10 15 20



///////////////////////////////////////////////////////////////
// 🔶 6. SKIP ITEMS
///////////////////////////////////////////////////////////////

let [, , c1, , e1] = [1, 2, 3, 4, 5];

console.log(c1, e1);
// Output → 3 5



///////////////////////////////////////////////////////////////
// 🔶 7. SWAPPING VALUES
///////////////////////////////////////////////////////////////

// Traditional swap
let a1 = 5;
let b1 = 10;

let temp = a1;
a1 = b1;
b1 = temp;

console.log(a1, b1);
// Output → 10 5


// ✅ Swap using destructuring
let a2 = 5;
let b2 = 10;

[a2, b2] = [b2, a2];

console.log(a2, b2);
// Output → 10 5



///////////////////////////////////////////////////////////////
// 🔶 8. NESTED ARRAY DESTRUCTURING
///////////////////////////////////////////////////////////////

let [p,,,[x2, y2]] = [1, 2, 3, [5, 6]];

console.log(p);    
// Output → 1

console.log(x2, y2);  
// Output → 5 6



///////////////////////////////////////////////////////////////
// 🔶 9. OBJECT DESTRUCTURING (Basic)
///////////////////////////////////////////////////////////////

let obj1 = {
    name: 'manas',
    age: 21,
};

let { name: n1, age: a3 } = obj1;

console.log(n1, a3);
// Output → manas 21



///////////////////////////////////////////////////////////////
// 🔶 10. OBJECT DESTRUCTURING + REST
///////////////////////////////////////////////////////////////

let obj2 = {
    name: 'manas',
    age: 21,
    city: 'bhagalpur',
    isMarried: false,
};

let { name: n2, age: a4, ...othersObj } = obj2;

console.log(n2, a4, othersObj);
// Output → manas 21 { city: 'bhagalpur', isMarried: false }



///////////////////////////////////////////////////////////////
// 🔶 11. DEFAULT VALUES IN OBJECT
///////////////////////////////////////////////////////////////

let { name: n3, age: a5 = 18 } = {
    name: 'manas',
};

console.log(n3, a5);
// Output → manas 18



///////////////////////////////////////////////////////////////
// 🔶 12. RENAME VARIABLE
///////////////////////////////////////////////////////////////

let { name: fullName } = {
    name: 'Manas Kumar Lal'
};

console.log(fullName);
// Output → Manas Kumar Lal



///////////////////////////////////////////////////////////////
// 🔶 13. NESTED OBJECT DESTRUCTURING
///////////////////////////////////////////////////////////////

let obj3 = {
    name: 'manas kumar lal',
    age: 21,
    address: {
        city: 'bhagalpur',
        pincode: 812004,
        arr: [1, 2, 3, 4, 5]
    }
};

let {
    name: full,
    age,
    address: {
        pincode: code,
        arr: [a6, b6]
    }
} = obj3;

console.log(full);  
// Output → manas kumar lal

console.log(age);   
// Output → 21

console.log(code);  
// Output → 812004

console.log(a6, b6);
// Output → 1 2



///////////////////////////////////////////////////////////////
// 🔶 14. ARRAY DESTRUCTURING IN FUNCTION PARAMETER
///////////////////////////////////////////////////////////////

function sum([a, b]) {
    console.log(a + b);
}

sum([10, 5]);
// Output → 15



///////////////////////////////////////////////////////////////
// 🔶 15. OBJECT DESTRUCTURING IN FUNCTION PARAMETER
///////////////////////////////////////////////////////////////

function greet({ name, age }) {
    console.log(`Hello ${name}, your age is ${age}`);
}

greet({
    name: 'manas kumar lal',
    age: 21,
});

// Output → Hello manas kumar lal, your age is 21



///////////////////////////////////////////////////////////////
// 🔶 16. SPREAD OPERATOR (ARRAY COPY)
///////////////////////////////////////////////////////////////

let arrCopy = [1, 2, 3];

let copyArr = [...arrCopy];

console.log(copyArr);
// Output → [1, 2, 3]



///////////////////////////////////////////////////////////////
// 🔶 17. SPREAD OPERATOR (OBJECT COPY + ADD)
///////////////////////////////////////////////////////////////

let obj4 = {
    name: 'manas kumar lal',
    age: 21,
};

let objWithCity = {
    ...obj4,
    city: 'bhagalpur'
};

objWithCity.streetAddress = 'road';

console.log(objWithCity);
// Output → { name: 'manas kumar lal', age: 21, city: 'bhagalpur', streetAddress: 'road' }

console.log(obj4);
// Output → { name: 'manas kumar lal', age: 21 }



///////////////////////////////////////////////////////////////
// 🔶 18. REST PARAMETER + DESTRUCTURING
///////////////////////////////////////////////////////////////

function seperateEvenOdd(...arr) {

    let even = arr.filter((elem) => elem % 2 === 0);
    let odd = arr.filter((elem) => elem % 2 !== 0);

    return { even, odd };
}

let { even, odd } = seperateEvenOdd(1, 2, 3, 5, 9, 10, 11);

console.log(even);
// Output → [2, 10]

console.log(odd);
// Output → [1, 3, 5, 9, 11]



///////////////////////////////////////////////////////////////
// 🔶 19. CUSTOM useState() (React Concept Simulation)
///////////////////////////////////////////////////////////////

// This simulates how React useState works internally

function useState(initialValue) {

    let value = initialValue;

    function setValue(val) {
        value = val;
    }

    function getValue() {
        return value;
    }

    return [getValue, setValue];
}


// Destructuring returned array
let [getCount, setCount] = useState(0);

console.log(getCount());
// Output → 0

setCount(5);

console.log(getCount());
// Output → 5
