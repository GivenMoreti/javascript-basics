//truthy and falsy values

//false
//0
//" or '' empty string
//null
//undefined
//NaN

// const children = undefined;
const children = 0;

if (!isNaN(children)) {
    console.log(`you have ${children} children`);
} else {
    console.log("enter the number of children");
}
//checking for empty object
const user = {
    // username: "Kim",
    // age: 23
}


if (Object.keys(user).length > 0) {
    console.log("list users");
} else {
    console.log("No users");
}


//returning left side unless if left side is undefined
let c;
c = 10 ?? 30;
c = null ?? 30;
console.log(c);

let b;
b = 10 || 20;
b = 0 || 20;
b = 0 || null || "" || undefined;      //undefined
//console.log(b);

//ternary operator
const age = 19;
if (age >= 18) {
    console.log("allowed");
} else {
    console.log("not allowed");
};
//ternary form
(age >= 18) ? console.log("vote") : console.log("cannot vote");
//clg

const canVote = age >= 18 ? console.log("can vote") : console.log("cannot vote");
// console.log(canVote);

