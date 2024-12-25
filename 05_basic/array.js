// Array
// Array is object and resizble , 
// Array create same data type multiple  values also you can use a multiple datatype and multiple array to 
// Array and nested array to 
// JavaScript array-copy operations create shallow copies.
// What is shallow copies:- shallow copies of an object is a copy whose properties share the same references . useing a Heap Memmory
// What is Deep Copies:- deep cpies of an object is a  copy whose properties do not share the same references . deep copies use a stack memmory

const myArr = [0,3,5,67,7,4];
// PRINT INDEXING 1
console.log(myArr[1]);
// PRINT WHOLE ARRAY
console.log(myArr);

// Array methods
// push(to add value)
myArr.push(6)
console.log(myArr);

// pop(to remove array last value)
myArr.pop();
console.log(myArr);


// UNSHIFT ,SHIFT
// Unshift nothing just like push but one different unshift add value in 0 indexing.
// Shift is same is pop same differnt 0 indexing value remove .

myArr.unshift(580);
console.log(myArr);

// shift
myArr.shift();
console.log(myArr);

// If array you want to change ho jaye STRING  mai so use .JOIN()
const newArr = myArr.join()
console.log(myArr);
console.log(newArr); //this output or newArr String (typeof newArr);

// splice and slice
