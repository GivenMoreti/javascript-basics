const fruits = ["apple", "banana"];
const berries = ["straw", "blue", "rasp"];
//fruits.push(berries);
//console.log(fruits) //[ 'apple', 'banana', [ 'straw', 'blue', 'rasp' ] ]

//getting nested item
//console.log(fruits[2][1]);      //blue

const allFruits = [fruits, berries];     //concat arrays
//console.log(allFruits)     //[[ 'apple', 'banana', [ 'straw', 'blue', 'rasp' ] ],[ 'straw', 'blue', 'rasp' ]]
//console.log(allFruits[0][2][0]);       //returns straw


//concatenating the arrays method 2
fruits.concat(berries);
//console.log(fruits)

//spread operator
const myFruits = [...fruits, ...berries];
//console.log(myFruits);      //[ 'apple', 'banana', 'straw', 'blue', 'rasp' ]

//flatten arrays
const arr = [1, 2[3, 4], 5, [6, 8]];

//console.log(arr.flat()); 

//check if is array;
console.log(Array.isArray(fruits));     //true
console.log(Array.from('1234')); //['1','2','3','4','5']