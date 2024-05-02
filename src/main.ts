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



/* Tuple type => tuple works like an array with following consideration
1.the number of elements in the tuple is fixed
2. the type of elements are known
    
    
    */

let user: [string, string, boolean] = ["madhav", "pmadhav279@gmail.com", true];

 user.push("string value", false);


let coordinates: [number, number] = [1564665, 494949];

// named Tuple
let  pepsi: [color: string, isCorbonated: boolean, sugarLevel: number] = ["Black", true, 40];

let lemonade: [string, boolean, number] = ["water color", true, 30];

// Using type alias
type Drinks = [string, boolean, number];
let sprite: Drinks = ["Brown", true, 40];
let tea: Drinks = ["Black", false, 0];

const useState = (initialValue: string):[()=>string, ((newValue: string)=> void)] =>{
let value = initialValue; 
return[
    ()=> value,
    (newValue)=>{
        value = newValue
    }
]

}


const[valueGetter, valueSetter] = useState("This is initial value");
console.log(valueGetter());

valueSetter("This is new value");
console.log(valueGetter());

//More type alias
type mathFunction = (a:number, b:number, c?: number)=> number

const addFunction: mathFunction = (a, b, c)=>{
    return c? c+a+b: a+b
};
console.log(addFunction(6,40 ));


const multiplyFunction: mathFunction = (a,b,c)=>{
    return c? c*a*b: a*b
}

console.log(multiplyFunction(4,5));


//Generics
/* 
Generics allows to capture the type of the argument in such a way that we can also use it to denote what is being returned

Syntax
function identity <Type>(arg: Type):Type {
    return arg
}
*/

function printString<T>(arg:T):T{
    return arg
}

let result = printString<string>("Hellow World");
console.log(result);

// Generic class

 class CustomArray<T>{
    private arr: T[];

    constructor(array: T[]){
        this.arr = array;
    }
addItem(item: T){
    this.arr.push(item);
}

getItem(){
    return this.arr;
}
removeItem(item:T){
    let indexOfItem = this.arr.indexOf(item);
    if(indexOfItem> -1){
        this.arr.splice(indexOfItem, 1)
    }
}

}

let numArray = new CustomArray<number>([1,4,5]);
const numArrayResult = numArray.getItem();
numArray.addItem(6)
console.log(numArrayResult);

let stringArray = new CustomArray<string | number>(["Ram", "Sita"])
 const stringArrayResult = stringArray.getItem();

 stringArray.addItem(10)
 
 console.log(stringArrayResult);