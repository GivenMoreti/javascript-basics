const { Surfing } = require("@mui/icons-material");

function greet() {
    //console.log("hello javascript");
}

greet();

function add(num1, num2) {

    return num1 + num2;

}

const sum1 = add(3, 5);


function registerUser(user = "Bot") {
    return user + " is registered";
}

const user1 = registerUser();
//console.log(user1);

//passing unlimited parameters using rest operator

function sum(...nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];

    }

    //OR USE FOREACH
    // for(const num of numbers){
    //     total += num;
    // }

    return total;
}

//console.log(sum(1, 2, 43, 45));      //91

//parsing objects as params
function loginUser(user) {

    return `The user ${user.name} with the id of ${user.id} is logged in `
}

//instance / object
const user2 = {
    id: 23,
    name: "Dan"
}

//console.log(loginUser(user2));

//passing arrays as params

function getRandom(arr) {
    const index = Math.floor(Math.random() * arr.length);
    const item = arr[index];
    //console.log(item);
}

getRandom([2, 34, 5, 6, 7, 89]);            //randomly displays the items in the arr

//notice the difference in syntax but output same
function getRandom(...arr) {
    const index = Math.floor(Math.random() * arr.length);
    const item = arr[index];
    //console.log(item);
}

//getRandom(2, 34, 5, 6, 7, 89);            //no need to add []

//scope
//You can access a parent from within a child

//function expression
const product = function (num1, num2) {
    return num1 * num2;
};

//console.log(product(2, 4));        //8


//ARROW FUNCTIONS
const addNums = (num1, num2) => {
    return num1 + num2;
};

//ARROW FUNCTIONS shortened form   IMPLICIT RETURN
const substract = (num1, num2) => num1 - num2;
//console.log(substract(5, 2));       //3

//only leave the () when you have a single param
const double = num => num * 2;
//console.log(double(3));     //6

//RETURNING AN OBJECT using spread operator
const minMax = (arr) => {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { min, max };
}

//console.log(minMax([1, 23, 5, 8]));     //{ min: 1, max: 23 }


((length,width)=>{
 const area = length * width;
 const output = `The length is ${length} and width is ${width} and area is ${area}`
 console.log(output);
})(2,3);

