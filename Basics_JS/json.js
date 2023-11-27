//used i apis
//replaced xml
//https://api.github.com/users


//converting objects to json
//object
const post = {
    id:1,
    title:'post 1',
    body:'body part'
};

const str = JSON.stringify(post);
console.log(str)        //{"id":1,"title":"post 1","body":"body part"}
//what would be send to server



