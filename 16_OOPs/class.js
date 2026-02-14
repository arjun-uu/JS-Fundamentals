// ==========================================
// 1. Basic Class & Objects
// ==========================================
class Car {
    constructor(name, color, mileage) {
        // 'this' refers to the specific instance being created
        this.name = name;
        this.color = color;
        this.mileage = mileage;
    }

    start() {
        console.log(`${this.name} is starting...`);
    }

    stop() {
        console.log(`${this.name} is stopping...`);
    }
}

// Creating instances (objects) of the Car class
let bmw = new Car("BMW", "Dark Blue", 45);
let toyota = new Car("Toyota", "Silver Blue", 28);
let buggati = new Car("Buggati", "Brown", 5);

console.log(bmw, toyota, buggati);

// ==========================================
// 2. Private Fields & Methods (#)
// ==========================================
class CarWithFuel {
    #fuel = 100; // '#' makes this field private, inaccessible outside class

    #burnFuel() { // '#' makes this method private
        this.#fuel -= 1;
    }

    start() {
        this.#burnFuel(); // Private method called internally
        console.log('Car is starting and fuel was burned...');
    }
}

let secureCar = new CarWithFuel();
secureCar.start();
// console.log(secureCar.#fuel); // Error: Private field '#fuel' must be declared in an enclosing class

// ==========================================
// 3. Encapsulation (Getters/Setters)
// ==========================================
class BankAccount {
    #balance = 100; // Private field

    constructor(holderName, balance = 100) {
        this.holdersName = holderName;
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    // Setter: Validates data before changing private variable
    set setter(balance) {
        if (isNaN(balance) || balance < 0) {
            console.error("Invalid balance");
            return;
        }
        console.log("Balance set successfully");
        this.#balance = balance;
    }

    // Getter: Allows read-only access to private variable
    get getter() {
        return this.#balance;
    }
}

let manasAcc = new BankAccount("Manas Kumar Lal", 500);
manasAcc.setter = 234234; // Using setter like a property
console.log(manasAcc.getter); // Using getter like a property

// ==========================================
// 4. Inheritance (extends/super)
// ==========================================
class ElectricCar extends Car {
    constructor(brand, color, battery) {
        // super() calls the constructor of the parent class (Car)
        super(brand, color);
        this.battery = battery;
    }

    charging() {
        console.log(`${this.brand} is charging...`);
    }
}

let tesla = new ElectricCar("Tesla", 'black', 99);
tesla.start(); // Inherited method
tesla.charging(); // Specific method
console.log(tesla);

// ==========================================
// 5. Polymorphism (Method Overriding)
// ==========================================
class MediaPlayer {
    play() {
        console.log('Play media');
    }
}

class Music extends MediaPlayer {
    play() {
        console.log('Play music'); // Overrides parent method
    }
}

class Video extends MediaPlayer {
    play() {
        console.log('Play video'); // Overrides parent method
    }
}

let o1 = new Music();
o1.play(); // Outputs: Play music

let o2 = new Video();
o2.play(); // Outputs: Play video

let o3 = new MediaPlayer();
o3.play(); // Outputs: Play media

// ==========================================
// 6. IIFE (Immediately Invoked Function Expression)
// ==========================================
(function() {
    console.log("Hello from IIFE!");
})();
