// OBJECT DE-STRUCTURE  AND JSON API INTO

const course ={
    coursename:"js in hindi",
    price :'02',
    courseInstructor:"aman",
}
//first way to use 
console.log(course.courseInstructor);

// second way to use
const {courseInstructor}= course;
console.log(courseInstructor);
//  if you see very log name you can change a name

const {courseInstructor: instructor}=course;
console.log(instructor);


// how to use react 
// method to de-structure 
//  you can use a propes and de- structure

// const navbar = ({company}) =>{

// }
// navbar(company = "Ajay ")


// API INTRO

// API KE ANDAR DATA JSON KE OR ARRAY KE FORMATE MAI MILTA HAI
// {
//"NAME":"AMAN",
//"COURSE":"JS",
//} LIKE OBJECT / JSON
// THIS IS SECOND TYPE DATA LIKE ARRAY 
// [
//     {},
//     {},
//     {}
// ]

