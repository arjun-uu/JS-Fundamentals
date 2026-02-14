function BankAccount(holdersName, balance = 0) {
    this.holdersName = holdersName;
    this.balance = balance;
    // this.deposit = function(balance){
    //     console.log("deposit: ", balance)
    // }
    // this.withdraw = function(balance){
    //     this.balance -= balance;
    // }
}

BankAccount.prototype.deposit = function (balance) {
    this.balance += balance;
}
BankAccount.prototype.withdraw = function (balance) {
    this.balance -= balance;
}

let muskanAccount = new BankAccount('Muskan', 1000)
console.log(muskanAccount)


function Student(name){
    return {
        name,
    }
}

let ob1 = Student("mkl")
console.log(ob1);


class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduceMyself() {
        console.log(`My name is ${this.name}, age is ${this.age}`)
    }
}

let s1 = new Student("Muskan", 19)
console.log(s1);