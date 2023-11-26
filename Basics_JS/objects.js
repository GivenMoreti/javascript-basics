//key value values
const person = {
    name: "James",
    age: 23,
    isRegistered: true,
    address: {
        street: "120 ave",
        city: "Jhb",
        state: "RSA"
    },
    hoobies: ["music", "sports"]
}

//console.log(person.hoobies[1])      //sports
//console.log(person.address.city)        //Jhb

//person.name = "Dan lok";

person.greet = function () {
    console.log(`hello my name is ${this.name}`);       //hello my name is James
}

person.greet();     ///calling function

//objects spread operator and methods



///nesting objects
const person2 = {
    address: {
        coordinates: {
            lat: 34.89,
            lon: 36.876
        }
    }
}

console.log(person2.address.coordinates.lat);        //34.89

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 4, d: 5 };

const obj3 = { ...obj1, ...obj2 };      //spread operator to combine all the props of obj1 and obj2 into 3
console.log(obj3);     //{ a: 1, b: 2, c: 4, d: 5 }


//or use Object.Assign()
const obj4 = Object.assign({}, obj1, obj2);       //{ a: 1, b: 2, c: 4, d: 5 }

console.log(obj4);
