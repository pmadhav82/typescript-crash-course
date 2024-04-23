import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)




//bojects in typescrit

interface Person {
  name: string,
  age:number,
  isProgrammer: boolean,
getPersonDetail: () => string,
greeting: (time:Date) => string 
};

let person: Person = {
  age:76,
  isProgrammer:true,
  name:"Madhav",
  getPersonDetail() {
    return `${this.name} is ${this.age} years old`
  },
greeting: function(time: Date){
return `Hi ${this.name} today is ${time.toLocaleDateString()} `
}
}

//console.log(person.greeting(new Date()));


type AnimalObj = {
  name:string,
  color:string,
  life_span:number
}
const myAnimal: AnimalObj = {
  color:"black",
  life_span: 4,
  name:"Cow"
}

const animalInfo = (animal: AnimalObj ) => `${animal.name} is ${animal.color} and has life span of ${animal.life_span} years`

//console.log(animalInfo(myAnimal));

// Function in typescript

const add = (a:number, b:number) : number => {
  return a +b;
}

//console.log(add(5,9));

const personDetail = (name:string, age:number, address?:string):string =>{
  return `${name} is ${age} years old and live in ${address || "unknown address"}` 
} 
//address?:string is optional parameter
// console.log(personDetail("Madhav", 20));
// console.log(personDetail("Madhav", 20,"Sydney, Australia"));

// const usersName = (...names:string[]): object =>{
//   interface User {
// numberOfUser:number,
// namesOfUser:string
//   }
// const user:User ={
//   numberOfUser:names.length,
//   namesOfUser: names.join(",")
// }
// return user
// }


const usersName = (...names:string[]) =>{

return {
  numberOfUser:names.length,
  namesOfUser: names.join(",")
}
}

// console.log(usersName('madhav', 'eshan', 'duyen'));

// console.log(usersName('madhav',  'duyen'));







class Person{

name:string;
age:number;
isProgrammer:boolean

constructor(n:string, a:number, iP:boolean){
  this.age =a;
  this.name = n;
  this.isProgrammer = iP;
}

 
getDetail(){
  return `name is ${this.name}, age is ${this.age} and is programmer?: ${this.isProgrammer}`
}




}

const person1 = new Person("Madhav", 20, true);
//console.log(person1.getDetail());


//Union type
/* Can assign more than one type, in this case amount can be string or number */
let amount:number | string = 90;
amount = "$50";

interface Circle{
  kind:"circle"
  radious:number
}

interface Square{
  kind:"square"
  length:number
}

type Shape = Circle | Square

const getArea = (shape:Shape) =>{
// if(shape.kind ==="circle"){
//   return Math.PI * shape.radious **2
// }
// if(shape.kind === "square"){
//   return shape.length **2
// }
switch(shape.kind){
  case "circle":
    return Math.PI * shape.radious **2;
    case "square" :
      return shape.length **2

}
}





// console.log(getArea({kind:"circle", radious:3}));

// console.log(getArea({kind:"square", length:4}));