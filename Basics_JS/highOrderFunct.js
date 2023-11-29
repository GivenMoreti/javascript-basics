//used in search bars


const words = ["water", "vitamins", "executable", "portable document format", "text", "pptx", "xlsx"];

const selectedWords = words.filter(word => word.length > 6);

console.log(...selectedWords);      //vitamins executable portable document format
console.log(words)
const startsE = words.filter(word => word.charAt(0) === "e");
console.log(...startsE);

const containsM = words.filter(word => word.includes("m"));
console.log(containsM);     //[ 'vitamins', 'portable document format' ]


const companies = [
    { name: "company 1", category: "Finance", start: 1965, end: 2054 },
    { name: "company 2", category: "Tech", start: 1905, end: 2055 },
    { name: "company 3", category: "Finance", start: 1945, end: 2005 },
    { name: "company 5", category: "Retail", start: 1995, end: 2004 },

]

//get only retail companies
const retail = companies.filter(company => company.category === "Retail");
console.log(...retail);


//get only retail companies
const finance = companies.filter(company => company.category === "Finance");
console.log(...finance);


//MAP FUNCTION

const numbers = [1, 2, 5, 66, 7];

const doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);         //[ 2, 4, 10, 132, 14 ]


//with foreach
numbers.forEach((number) => {
    console.log(number * 2);
});

/*
returns the same output with foreach 
    2
    4
    10
    132
    14
*/

const companyNames = companies.map(company => company.name);
console.log(companyNames);

//return company details as an object

const companyInfo = companies.map(company => {
    return {
        name: company.name,
        category: company.category,

    };
});
console.log(JSON.stringify(companyInfo));

//[{"name":"company 1","category":"Finance"},{"name":"company 2","category":"Tech"},{"name":"company 3","category":"Finance"},{"name":"company 5","category":"Retail"}]

console.log(companyInfo);
/*
[
  { name: 'company 1', category: 'Finance' },
  { name: 'company 2', category: 'Tech' },
  { name: 'company 3', category: 'Finance' },
  { name: 'company 5', category: 'Retail' }
]
*/

//create an array of the company lifespan

const companyLife = companies.map(company => {
    return {
        name: company.name,
        span: company.end - company.start,

    }

})
console.log(...companyLife);        //{ name: 'company 1', span: 89 } { name: 'company 2', span: 150 } { name: 'company 3', span: 60 } { name: 'company 5', span: 9 }


/**
 * [
  { name: 'company 1', span: 89 },
  { name: 'company 2', span: 150 },
  { name: 'company 3', span: 60 },
  { name: 'company 5', span: 9 }
]
 */

//add 10 to all the lifespam

const companyAdded = companyLife.map(company => {
    return {
        name: company.name,
        span: Number.parseInt(company.span) + 10

    }

})
console.log(companyAdded);

/*
        returns the following output
[
  { name: 'company 1', span: 99 },
  { name: 'company 2', span: 160 },
  { name: 'company 3', span: 70 },
  { name: 'company 5', span: 19 }
]

*/