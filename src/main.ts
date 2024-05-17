let fruits: number = 9;
let city: string = "Sydney";
let hasMiddleName: boolean = false;
let nothing: undefined = undefined;

let now: Date = new Date();

// Array
let colors: string[] = ["red", "green"];
let userId: number[] = [48959, 595894, 40595];

// Classes

class Car {}

let myCar: Car = new Car();

// objects literal
let points: { x: number; y: number } = {
  x: 7,
  y: 6,
};

let myPoints: { x: number; y: number } = {
  x: 8,
  y: 9,
};

// Function

/* 
syntax for creating function
=> function functionName(param1:param1Type, param2: param2Type): returnType{
    body of function
}
*/

const sum = (a: number, b: number): number => {
  return a + b;
};

sum(3, 6);
//named by alias
type User = {
  firstName: string;
  lastName: string;
};

const getFullName = (user: User): string => {
  return `${user.firstName} ${user.lastName}`;
};

getFullName({ firstName: "Madhav", lastName: "Pandey" });

// pass data as object type
const getFullName2 = (person: {
  firstName: string;
  lastName: string;
}): string => {
  return `${person.firstName} ${person.lastName}`;
};
getFullName2({ firstName: "Madhav", lastName: "Pandey" });

//pass data using interface

interface IPerson {
  firstName: string;
  lastName: string;
  age?: number;
}

const getFullName3 = (person: IPerson): string => {
  return `Hellow ${person.firstName} ${person.lastName} ${
    person.age ? `and you are ${person.age} years old` : ""
  } `;
};

console.log(getFullName3({ firstName: "Madhav", lastName: "Pandey", age: 20 }));

/* Tuple type => tuple works like an array with following consideration
1.the number of elements in the tuple is fixed
2. the type of elements are known
    
    
    */

let user: [string, string, boolean] = ["madhav", "pmadhav279@gmail.com", true];

user.push("string value", false);

let coordinates: [number, number] = [1564665, 494949];

// named Tuple
let pepsi: [color: string, isCorbonated: boolean, sugarLevel: number] = [
  "Black",
  true,
  40,
];

let lemonade: [string, boolean, number] = ["water color", true, 30];

// Using type alias
type Drinks = [string, boolean, number];
let sprite: Drinks = ["Brown", true, 40];
let tea: Drinks = ["Black", false, 0];

const useState = (
  initialValue: string
): [() => string, (newValue: string) => void] => {
  let value = initialValue;
  return [
    () => value,
    (newValue) => {
      value = newValue;
    },
  ];
};

const [valueGetter, valueSetter] = useState("This is initial value");
console.log(valueGetter());

valueSetter("This is new value");
console.log(valueGetter());

//More type alias
type mathFunction = (a: number, b: number, c?: number) => number;

const addFunction: mathFunction = (a, b, c) => {
  return c ? c + a + b : a + b;
};
console.log(addFunction(6, 40));

const multiplyFunction: mathFunction = (a, b, c) => {
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

function printString<T>(arg: T): T {
  return arg;
}

let result = printString<string>("Hellow World");
console.log(result);

// Generic class

class CustomArray<T> {
  private arr: T[];

  constructor(array: T[]) {
    this.arr = array;
  }
  addItem(item: T) {
    this.arr.push(item);
  }

  getItem() {
    return this.arr;
  }
  removeItem(item: T) {
    let indexOfItem = this.arr.indexOf(item);
    if (indexOfItem > -1) {
      this.arr.splice(indexOfItem, 1);
    }
  }
}

let numArray = new CustomArray<number>([1, 4, 5]);
const numArrayResult = numArray.getItem();
numArray.addItem(6);
console.log(numArrayResult);

let stringArray = new CustomArray<string | number>(["Ram", "Sita"]);
const stringArrayResult = stringArray.getItem();

stringArray.addItem(10);

console.log(stringArrayResult);

// Rest parameter
const total = (...nums: number[]): number => {
  return nums.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
};

const logMessage = (message: any): void => {
  console.log(message);
};

logMessage(total(5, 5, 5, 5));

const greet = (greeting: string, ...names: string[]) => {
  return `${greeting}, ${names.join(", ")}`;
};

logMessage(greet("Good evening", "Madhav", "Hari", "Sham"));


// More on generic


const myUsers = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]



/*
Type never: It is used when value that will never occur

*/
const infinitFunction = () => {
  while (true) {
    console.log("I am infinitFunction...");
  }
};

// Type Assertion OR Type Casting
/*
Type assertion is the way to tell typescript not to infer it and we know the type of a variable better than typescript compiler. 
*/
type One = string;
type Two = string | number;
type Three = "helo";

let a = "helo" as Two;
let b = <Three>"helo";

let code: any = 123;
let userNum = code as number;
console.log(typeof userNum);

interface Student {
  name: string;
  rollNum: number;
}

let student1 = { name: "Madhav", rollNum: 4 } as Student;
console.log(student1.name);

class Person {
  name: string;
  address: string;
  private readonly age: number;
  constructor(name: string, address: string, age: number) {
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
  language: string[];
  experience: number;
  constructor(
    address: string,
    name: string,
    age: number,
    language: string[],
    experience: number
  ) {
    super(name, address, age);
    this.language = language;
    this.experience = experience;
  }
  getLanguages() {
    return `${this.language.join(", ")}`;
  }
  getProgrammerInfo() {
    return `${this.name} lives in ${
      this.address
    } and ${this.getAge()} years old has knowledge of ${this.getLanguages()} and has ${
      this.experience
    } years of experience. `;
  }
}

const myProgrammer = new Programmer(
  "Sydney, Australia",
  "Madhav Pandey",
  20,
  ["JavaScript", "PHP"],
  2
);
console.log(myProgrammer.getProgrammerInfo());

// static property or method in class is directly related to class not with its instance

class Student implements Student {
  name: string;
  rollNum: number;
  static count = 0;
  constructor(name: string) {
    this.name = name;
    this.rollNum = ++Student.count;
  }
  public getCount(): number {
    return Student.count;
  }
}

const myStudent = new Student("Madhav");
const myStudent2 = new Student("Madhav");

console.log(myStudent2.getCount());

// getter and setter

class Band {
  private membersName: string[];
  constructor() {
    this.membersName = [];
  }

  get getNames(): string[] {
    return this.membersName;
  }

  set setNames(names: string[]) {
    if (
      Array.isArray(names) &&
      names.every((name) => typeof name === "string")
    ) {
      this.membersName = [...this.membersName, ...names];
    } else {
      throw new Error("Provided value is not an array or not an valid array");
    }
  }
}

const myBand = new Band();
myBand.setNames = ["Eshan", "Madhav", "Rubi"];
console.log(myBand.getNames);

// Index Signature allows accessing properties of an object dynamically

interface Transaction {
  [index: string]: number;
  Pizza: number;
  Burger: number;
  Coffee: number;
}

const todayTransaction: Transaction = {
  Burger: 60,
  Coffee: 40,
  Pizza: 50,
};

const getTotal = (transactions: Transaction): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(getTotal(todayTransaction));
/*
const getTotal = (transactions: Transaction): number =>{
    let total = 0;
    for(const transaction in transactions){
total += transactions[transaction]
    }
    return total
}

  => will give error if there is not index signature ([index: string] : number) saying: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Transaction'.
  No index signature with a parameter of type 'string' was found on type 'Transaction'.
  */

// Iterate object without index signature
interface Blog {
  title: string;
  postedBy: string;
  liked: number[];
}

const myBlog: Blog = {
  liked: [123546, 1235264],
  postedBy: "Madhav",
  title: "My blog post",
};

for (const blog in myBlog) {
  console.log(`${blog}: ${myBlog[blog as keyof Blog]}`);
}

// Utility types //
// Partial<Type> Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const myToDo: Todo[] = [
  {
    id: 14,
    title: "repellendus sunt dolores architecto voluptatum",
    completed: true,
  },

  {
    id: 15,
    title: "repellendus sunt dolores architecto voluptatum",
    completed: false,
  }
];


const updateTodo = (todo: Todo[], todoToUpdate: Partial<Todo>): Todo[] =>{
let index = todo.findIndex(t=> t.id === todoToUpdate.id);
if(index === -1) throw new Error("todo could not found");

    todo[index] = {... todo[index], ... todoToUpdate};

    return todo
}


console.log(updateTodo(myToDo, {id:15, title:"Madhav todo", completed:false}));

// Record <Type, keys>

type letterGrade = "A" 
type StudentNames= {name:string , rollNum: number}[]

const studentGrade: Record<letterGrade, StudentNames>={
A:[{name:"madhav", rollNum:4}, {name:"Hari", rollNum:5}
],

}


