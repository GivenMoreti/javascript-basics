//print all the odd numbers
// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

const { CloudDone } = require("@mui/icons-material");

// const names = ["kane", "wiz", "sara"];

// for (let i = 0; i < names.length; i++) {

//     if (names[i] === "sara") {
//         console.log(`${names[i]} is the best`);
//     } else {
//         console.log(names[i]);
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("fizzbuzz");
//     } else if (i % 5 === 0) {

//         console.log("Buzz");
//     } else if (i % 3 === 0)
//         console.log("Fizz");
//     else {
//         console.log(i);
//     }
// }

//for of
const items = ["book", "phone", "house"];

for (const item of items) {
    //console.log(item);
}


//looping over  objects
const users = [
    { name: "Jan", age: 23 },
    { name: "jim", age: 34 },
    { name: "ken", age: 16 }
]

for (const user of users) {
    console.log(user.name, user.age);
}

//loop over strings

const str = "Hello js";
for (const letter of str) {
    console.log(letter);
}

//console.log(str);       //Hello js 

//forEach
const socials = ["twitter", "linkedin", "facebook"];

// socials.forEach((social,index,arr) => {
//     console.log(index + " " + social);
// });

logSocials = (social, index) => {
    console.log(index + " " + social);
};

socials.forEach(logSocials);

//foreach on objects

const socialObjs = [
    { name: "fb", users: "20" },
    { name: "insta", users: "204" },
    { name: "x", users: "27" }
]

socialObjs.forEach((item) => console.log(item.name));
socialObjs.forEach((item) => console.log(item.users));