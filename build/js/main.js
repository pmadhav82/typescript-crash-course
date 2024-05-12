"use strict";
let fruits = 9;
let city = "Sydney";
let hasMiddleName = false;
let nothing = undefined;
let now = new Date();
// Array
let colors = ["red", "green"];
let userId = [48959, 595894, 40595];
// Classes
class Car {
}
let myCar = new Car();
// objects literal
let points = {
    x: 7,
    y: 6
};
let myPoints = {
    x: 8,
    y: 9
};
// Function
/*
syntax for creating function
=> function functionName(param1:param1Type, param2: param2Type): returnType{
    body of function
}
*/
const sum = (a, b) => {
    return a + b;
};
sum(3, 6);
const getFullName = (user) => {
    return `${user.firstName} ${user.lastName}`;
};
getFullName({ firstName: "Madhav", lastName: "Pandey" });
// pass data as object type
const getFullName2 = (person) => {
    return `${person.firstName} ${person.lastName}`;
};
getFullName2({ firstName: "Madhav", lastName: "Pandey" });
const getFullName3 = (person) => {
    return `Hellow ${person.firstName} ${person.lastName} ${person.age ? `and you are ${person.age} years old` : ""} `;
};
console.log(getFullName3({ firstName: "Madhav", lastName: "Pandey", age: 20 }));
/* Tuple type => tuple works like an array with following consideration
1.the number of elements in the tuple is fixed
2. the type of elements are known
    
    
    */
let user = ["madhav", "pmadhav279@gmail.com", true];
user.push("string value", false);
let coordinates = [1564665, 494949];
// named Tuple
let pepsi = ["Black", true, 40];
let lemonade = ["water color", true, 30];
let sprite = ["Brown", true, 40];
let tea = ["Black", false, 0];
const useState = (initialValue) => {
    let value = initialValue;
    return [
        () => value,
        (newValue) => {
            value = newValue;
        }
    ];
};
const [valueGetter, valueSetter] = useState("This is initial value");
console.log(valueGetter());
valueSetter("This is new value");
console.log(valueGetter());
const addFunction = (a, b, c) => {
    return c ? c + a + b : a + b;
};
console.log(addFunction(6, 40));
const multiplyFunction = (a, b, c) => {
    return c ? c * a * b : a * b;
};
console.log(multiplyFunction(4, 5));
//Generics
/*
Generics allows to capture the type of the argument in such a way that we can also use it to denote what is being returned

Syntax
function identity <Type>(arg: Type):Type {
    return arg
}
*/
function printString(arg) {
    return arg;
}
let result = printString("Hellow World");
console.log(result);
// Generic class
class CustomArray {
    arr;
    constructor(array) {
        this.arr = array;
    }
    addItem(item) {
        this.arr.push(item);
    }
    getItem() {
        return this.arr;
    }
    removeItem(item) {
        let indexOfItem = this.arr.indexOf(item);
        if (indexOfItem > -1) {
            this.arr.splice(indexOfItem, 1);
        }
    }
}
let numArray = new CustomArray([1, 4, 5]);
const numArrayResult = numArray.getItem();
numArray.addItem(6);
console.log(numArrayResult);
let stringArray = new CustomArray(["Ram", "Sita"]);
const stringArrayResult = stringArray.getItem();
stringArray.addItem(10);
console.log(stringArrayResult);
// Rest parameter
const total = (...nums) => {
    return nums.reduce((previousValue, currentValue) => previousValue + currentValue);
};
const logMessage = (message) => {
    console.log(message);
};
logMessage(total(5, 5, 5, 5));
const greet = (greeting, ...names) => {
    return `${greeting}, ${names.join(", ")}`;
};
logMessage(greet("Good evening", "Madhav", "Hari", "Sham"));
/*
Type never: It is used when value that will never occur

*/
const infinitFunction = () => {
    while (true) {
        console.log("I am infinitFunction...");
    }
};
let a = "helo";
let b = "helo";
let code = 123;
let userNum = code;
console.log(typeof userNum);
let student1 = { name: "Madhav", rollNum: 4 };
console.log(student1.name);
class Person {
    name;
    address;
    age;
    constructor(name, address, age) {
        this.address = address;
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    getPersonInfo() {
        return `${this.name} lives in ${this.address} and ${this.age} years old`;
    }
}
const myPerson = new Person("Madhav", "Sydeny, Australia", 20);
console.log(myPerson.getPersonInfo());
class Programmer extends Person {
    language;
    experience;
    constructor(address, name, age, language, experience) {
        super(name, address, age);
        this.language = language;
        this.experience = experience;
    }
    getLanguages() {
        return `${this.language.join(", ")}`;
    }
    getProgrammerInfo() {
        return `${this.name} lives in ${this.address} and ${this.getAge()} years old has knowledge of ${this.getLanguages()} and has ${this.experience} years of experience. `;
    }
}
const myProgrammer = new Programmer("Sydney, Australia", "Madhav Pandey", 20, ["JavaScript", "PHP"], 2);
console.log(myProgrammer.getProgrammerInfo());
