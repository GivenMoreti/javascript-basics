// console.error("Hello");
// console.table({name:"Given",email:"Given@email.com"})
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

//object similar to a struct
const person = {
    name: "Kim",
    age: 23
}

person.age++;
console.log(person);
console.log(`his age is ${person.age}`, typeof person) //prints 24.
//String,Number,Boolean,Null,BigInt,undefined

//type conversion 21 Nov 2023d ..

//string to number
let amount = '100';

//amount = parseInt(amount);      //first method
//amount = + amount;              //second method
amount = Number(amount);            //third method
console.log(amount, typeof amount);

//convert Number to string.
amount = 50;
amount = amount.toString();
console.log(amount, typeof amount);

//convert string to decimal
amount = "14.59";

amount = parseFloat(amount);

console.log(amount, typeof amount);

//convert number to boolean

amount = 1;     //true
amount = 0;     //false

amount = Boolean(amount);

console.log(amount, typeof amount);

//arithmetic operators
x = 3;
y = 7;
x++;           //increment x by 1
x--;            //decrement x by 1
z = y % x;

console.log(z);     //remainder is 1


const name = "Mike";
const age = 30;

//formatted strings
console.log(`Hi ${name} you are ${age} years`)

console.log(name.length, typeof name.length); //name.length is a number 
'faw '

let fullName = "mike jones";

console.log(fullName.charAt(0)); //M
//console.log(fullName.charAt(-1));
console.log(fullName.indexOf("s"));
console.log(fullName.substring(0, 5)); //Mike
console.log(fullName.slice(-1));        //gets the last char


//fullName = fullName.split("");      //convert to arr
let afterSpace = fullName.indexOf(" ");

console.log(fullName.slice(afterSpace, -1));

const myString = "developer";

let myNewString = myString.charAt(0).toUpperCase() + myString.substring(1); //returns Developer
myNewString = myString[0].toUpperCase() + myString.substring(1); //returns Developer
myNewString = `${myString.charAt(0).toUpperCase()}${myString.substring(1)}` //returns Developer

console.log(myNewString); //Developer.

//working with numbers

let num = 5;
num.toString().length;

console.log(num.toLocaleString("ar-EG")); //representation of number 5 in Egypt

let greet = 666;
greet.toString();
console.log(greet.toLocaleString("ar-Eg")) 

