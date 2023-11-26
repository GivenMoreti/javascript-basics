//arrays in javascript
//can take multiple data types.
//mutable
const nums = [2, 3, 54];

const fruits = ["apple", "mayo", "ice", true, null];

//x = fruits.length        //3 items
fruits[fruits.length] = "cider";       //add item at the end
fruits.push("snack");
fruits.pop("snack"); //removes snack
fruits.shift();
//fruits.filter;

console.log(fruits)
fruits[fruits.length] = "mango"; //add item at the end
fruits[1] = "orange";
fruits[2] = "pear";
//console.log("New Arr :" + fruits);
//console.log(fruits[fruits.length]); //undefined.
//array constructor

const food = new Array("Pap", "salad", "meat");

//console.log(food.length + " items in the array");

food.push("rice");
food.unshift(8);        //add item at the beginning
food.shift();           //removes item at the beginning

//include               //check if a value exists in the array boolean

console.log(food.includes("Pap"));

// -1 doesnt exist.
//slice & splice
console.log(food.slice(1, 2)); //salad      //doesnt manipulate the origina array

//splice /manipulate the original array

console.log(food.splice(1, 2));  //removes an element permanently from arr
