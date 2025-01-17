// for of loop

const arr = [1,5,3,2,4];
// for of
// for(const num  of object){
    //    first declare a variable second one is object ke sthan per arr "jsper array lagana hai"
// }

for (const num of arr){
    console.log(num);
}

// second loop
const greetings ="Hello";
for (const greet of greetings){
    console.log(`Each char is ${greet}`)
}

// if you found a space then brack 
const gretings = "Hello Programmer";
for (const greet of gretings) {
    console.log(`Each char is ${greet}`) 
    if (greet === ' ') {
        console.log("Space found!");
        break; // Exit the loop after finding the first space
    }
}



// map
// map is object and knows for uniqe value . same entery ka output ek baar hi aaye ga 2 time or more nahi aaye ga
// map mai jis order mai entery karo gye usi order mai output hoga . 

const map = new Map()
map.set('IN','India') /** thoda sa diferent hua to aaye ga like capital to small bhi ua tabhi output mai aaye ga */
map.set('USA', "United States of America")
map.set('In', "India")  /** same */
map.set('FR',"France")
map.set('In', "India")  /** same */

console.log(map);
// second way to given output
// you can console key and vlaue with any symbole to use
for (const[key , value] of map){
    console.log(key , '=>', value);
}


