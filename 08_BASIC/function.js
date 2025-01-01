//function

function sayMyName(){
    console.log("h");
    console.log("h");
    console.log("h");
    console.log("h");
    console.log("h");
    console.log("h");
    console.log("h");
}

// sayMyName()

// create a function
// (number1, number2) if any value provide there called "PARAMETERS".
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(3,4)/**argument (3,4 ) */

// FUNCTION MAI RUTRUN KEY WORD KE BAAD KOI BHI DATA OR CODE WORK OR UNREACHBAL HOTA HAI 

// HOW TO RUTURN A DATA OR STROE A DATA

function addNewTwoNumber(number1, number2){
    // let result = number1 +number2
    // return result
    //  can direct return
    return number1 +number2
}
const result = addTwoNumbers(3,5);
// IF YOU WANT TO SEE A  STORE DATA OR CONSOLE A RESULT WHAT I FOUND
//  USING RETURN KEYWORD TO FIND RESULT VARABLE DATA

console.log("Result:", result );


// ek function create kiya and jab usko execute kiya fir uske andar koi value nahi dali tab kya print hoga
// parameters na diya or koi value hi pass nahi kiya 
// tab "UNDEFINDE AATA HAI"

function login(username ="sam"){
    // check a value pass or not 
    // if(username === undefined){
    //     console.log("Please enter a username");

    // }
    // SECOND WAY AND INDUSTRY LIKE
    if(!username){
        console.log("Please enter a username");

    }




return`${username} just logged in`
}
console.log(login()) /** () if you not pass a value then print "undefined" */