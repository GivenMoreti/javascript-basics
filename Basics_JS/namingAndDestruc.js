const username = "Mike james";
const age = 16;
const isAdmin = true;

const user = {
    username,
    age,
    isAdmin,
};

console.log(user.age); //16

//destructuring objects
const todo =
{
    todoID: 1,
    item: "clean",
}


//console.log(todo.title);      //clean
//using destructuing method
const { todoID, item } = todo;
console.log(item); //clean


//destructuring array numbers
const numbers = [12, 5, 67, 7];
const [firstNum, secNum, ...rest] = numbers;
console.log(firstNum, secNum, rest);   //returns 17


//destructuring arrays

const todoArr = [
    {
        id: 1,
        title: "run",
    },
    {
        id: 2,
        title: "cook",
    },
    {
        id: 3,
        title: "wash",
    }
];

const [id, title, ...remain] = todoArr;
console.log(title, ...remain);       //{ id: 2, title: 'cook' } { id: 3, title: 'wash' }
