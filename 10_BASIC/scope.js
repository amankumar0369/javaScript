// scope
// {} this is a scope 

let a = 300;  /** this is a global scope */
if(true){
    let a = 30    /** this part is local scope  */
    console.log(a);
}

console.log(a);  

// jab tak if condition ke andar hai tabtak local scope use hoga jo wahi hi access kar sakte hai kahi or nahi
//  jab uske bahar wala use  karteh or bahar ho tab global scope use karte hai 

// NESTED FUNCTION 
function one(){
    const username ="aman"

    function two(){
        const website = 'youtube'
        console.log(username);
        // console.log(website);

    }
    two();
    // console.log(website);
}
one();
// NESTED FUNCTION MAI CHILD FUNCTION APNE PARENT FUNCTION KE VARIABLE KO ACCESS KAR SAKTE HAI .
// BUT PARENT FUNCTION APNE CHILD FUNCTION KE VARIABLE KO ACCESS NAHI KAR SAKTE HAI ...


// NESTED IF USEING SCOPE

if(true){
    const username = 'aman'
    if(username === 'aman'){
        const website = ' youtue'
        console.log(username + website);
    }
    // console.log(website)  not access show error kyo ki iska scope upper hi khatam ho gaya hai 
}
//console.log(username);
// this is also so error same proble scope  issse pahle khatam ho gaya hai