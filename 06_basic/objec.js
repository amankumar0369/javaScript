// // Object 
// // Singleton object: constructor method se Banta hai  
// jab ham literals ki Tarah se object banate hai wo singleton object nhi hote hai

// Object Literals
const jsUser ={
    name:"Aman",
    age:[93,20,34,12,24],

}

// TWO WAY TO ACCESS
// FIRST WAY
console.log(jsUser.name);  
// SECONT WAY
console.log(jsUser["name"]);

// Way second way best because some time variable space hota hai or wo console.log(jsUser. full name) this type not working


// Create Object
const tinderUser = {}
tinderUser.id = "1"
tinderUser.name = "Aman"
tinderUser.isLogin ="FALSE"
console.log(tinderUser);

// nested  object

const regularUser ={
    email:'aman@gmail.com',
    userFullName:{
        firstName:"Aman",
        lastName:"Kumar"
    }
}
console.log(regularUser)

// two or many object add one object
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

const obj3 = {obj1,obj2};             // {obj1:{'1':'a','2':'b'},obj2:{'3':'c','4':'d'}}

const obj4 = Object.assign({},obj1,obj2)
console.log(obj3);
console.log(obj4);

// spread operator : to use to add to object
const obj5 ={...obj1, ...obj2}
console.log(obj5);

// if data comes in data base
const users =[
    {
        name:"aman",
        id:1,
    },
    {
        name:"aman",
        id:2,

    },
    {
        name:"aman",
        id:3,

    },
    {
        name:"aman",
        id:4,

    },{
        name:"aman",
        id:5,

    }, 
]

users.map((helo)=>{
    console.log(`Name:${helo.name},ID: ${helo.id}`);
})