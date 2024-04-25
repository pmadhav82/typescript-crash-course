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
