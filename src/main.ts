let fruits:number = 9;
let city: string = "Sydney";
let hasMiddleName: boolean = false;
let nothing : undefined = undefined;



let now : Date = new Date();


// Array
let colors: string[] = ["red", "green"];
let userId: number[] =[48959, 595894, 40595];


// Classes

class Car{

}

let myCar: Car = new Car()

// objects literal
let points: {x:number, y:number} = {
    x:7,
    y:6
}

let myPoints: {x:number; y:number} ={
     x:8,
     y:9
}



// Function


/* 
syntax for creating function
=> function functionName(param1:param1Type, param2: param2Type): returnType{
    body of function
}
*/

const sum = (a:number, b: number): number =>{
    return a +b;
}

sum(3,6)
//named by alias
type User = {
    firstName: string,
    lastName: string
}

const getFullName = (user:User):string=>{
    return `${user.firstName} ${user.lastName}`

}


getFullName({firstName:"Madhav", lastName:"Pandey"});

 // pass data as object type
const getFullName2 = (person:{firstName:string; lastName:string}):string =>{
    return `${person.firstName} ${person.lastName}`
}
getFullName2({firstName:"Madhav", lastName:"Pandey"});

//pass data using interface

interface Person{
    firstName:string,
    lastName:string
    age?:number
}

const getFullName3 = (person:Person):string =>{
    return `Hellow ${person.firstName} ${person.lastName} ${person.age ? `and you are ${person.age} years old` : ""} `
}

console.log(getFullName3({firstName:"Madhav", lastName:"Pandey", age:20}));

