//  Date 
//  Date is a object .
//  Date mai Month start 0.

let myDate = new Date();
console.log(myDate.toString()); // Outputs the current date and time as a string

// Given a specific date
let specificDate = new Date(2024, 11, 25); // Month is zero-indexed (December = 11)
console.log(specificDate.toJSON()); // Outputs date in ISO format: "2024-12-25T00:00:00.000Z"

console.log(myDate.getDate()); // Gets the day of the month (1-31)
console.log(myDate.getFullYear()); // Gets the year (e.g., 2024)

// Old date
let today = new Date();
let oldDate = new Date();
oldDate.setDate(today.getDate() - 10); // Subtract 10 days
console.log(oldDate.toString());

let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.toLocaleDateString());


//  TimeStemp 

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getDate());
// convert second
console.log(Math.floor(Date.now()/100));


