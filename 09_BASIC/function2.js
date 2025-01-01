// pass a multiple value
//  how to rest operator work
// these ... are rest operator or use to pass a multiple value

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,6000));
// this output given in "array formate ".

// HOW TO PASS A OBJECT IN FUNCTION 
const user ={
    username: "amna",
    price:65465
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);


}
handleObject(user);