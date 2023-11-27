function greet() {
    console.log("hello javascript");
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
console.log(user1);

//passing unlimited parameters

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

console.log(sum(1, 2, 43, 45));      //91

