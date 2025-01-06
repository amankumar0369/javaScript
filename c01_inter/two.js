//  foreach loop
const coding = ["js", "ruby","python","shift","java"];
//  daynamic function
coding.forEach(function(val){
    console.log(val);
})

//  second forEach with arrow function........
const cod = ['work','pata', 'lala'];
//  forEach loop mai arrow function ka use kar sakte hai 
cod.forEach((item)=>{
    console.log(item)
})

//  array ke andar object using foreach to itress the value 

const mycod =[
    {
        "phy" : "Python",
        "js" :"java"
    },
    {
        "phy":"interger",
        "js":"java"
    },
    {
        "phy":"worked",
        "js":"whole world"
    }
]
mycod.forEach((item)=>{ 
    // console.log(`${item.phy} => ${item.js}`);  /** both print  */
    console.log(item.phy)   

    
})

// NOTE :- FOREACH LOOP MAI ARRAY KE VALUE RETURN NAHI HOT OR KAHE KI FUNCTION ARRAY KE VALUE RETURN NAHI KARTA HA 
