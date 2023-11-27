//used i apis
//replaced xml
//https://api.github.com/users


//converting objects to json
//object
const post = {
    id: 1,
    title: 'post 1',
    body: 'body part'
};
//format to be send to server
const str = JSON.stringify(post);
console.log(str)        //{"id":1,"title":"post 1","body":"body part"}

//we can also jsonify arrays e.g
const posts = [
    {
        id: 1,
        title: 'post 1',
        body: 'body part 1'
    },
    {
        id: 2,
        title: 'post 2',
        body: 'body part 2'
    }
];

const str2 = JSON.stringify(posts);
console.log(str2);          //[{"id":1,"title":"post 1","body":"body part 1"},{"id":2,"title":"post 2","body":"body part 2"}]






//parse back to JSON
const obj = JSON.parse(str);

console.log(obj) //{ id: 1, title: 'post 1', body: 'body part' }

const obj2 = JSON.parse(str2);
console.log(obj2);
/*
[
  { id: 1, title: 'post 1', body: 'body part 1' },
  { id: 2, title: 'post 2', body: 'body part 2' }
]
*/


