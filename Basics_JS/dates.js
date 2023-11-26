let date = new Date(2000,1,27); //Sun Feb 27 2000
console.log(date.toDateString())    //returns Tue Nov 2023

//timestamps

let timeStamp =new Date("27-2-2000");
timeStamp = timeStamp.getTime();

//create a date from timestamp

let newDate = new Date();
console.log(newDate)

//now creating a meaningful date from timestamp

let myTimeStamp = Date.now(); //1700562423291

newDate = new Date(myTimeStamp);

console.log(newDate.toString()); //Tue Nov 21 2023 12:31:25 GMT+0200 (South Africa Standard Time)

let year = newDate.getFullYear();
let month = newDate.getMonth() + 1;
let day = newDate.getDay();
let dateOf = newDate.getDate();
let hours = newDate.getHours();
let min = newDate.getMinutes();
let sec = newDate.getSeconds();
let today = year +"-"+ month + "-" + dateOf + "-" + hours +":"+min+":"+sec;    //2023-11-21
console.log(today)

let dateOfUser = Intl.DateTimeFormat('default').format(newDate); //11/21/2023
console.log(dateOfUser)

dateOfUser = Intl.DateTimeFormat('default',{month:"long"}).format(newDate); //11/21/2023
console.log(dateOfUser)

let fullDate = newDate.toLocaleString("default",{
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric",
    hour:"numeric",
    minute:"numeric",
    second:"numeric",
    timezone:"South African Standard Time/Johannesburg",

});

console.log(fullDate);

// document.querySelector("DOMContentloaded",()=>{
//     let dateForToday = document.getElementById("date");
//     dateForToday.innerHTML= fullDate;
// })
