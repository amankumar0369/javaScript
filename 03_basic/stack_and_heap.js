// Stack and Heap Memory

// Primitive data types mainly use Stack memory.
// Non-Primitive data types mainly use Heap memory.
// In Stack memory, whatever variables or data are stored, their copies are obtained.
// In Heap memory, whaterver data,array , object are stored  we can get a orignal refrence .
// stack  
// isme copy hi data or variable deta hai or wahi change hu
let myYoutubename ="kumar";
let anothername= myYoutubename;
anothername ="chai"
console.log(myYoutubename);
console.log(anothername);

// heap mai data or object , value change hoti kyo ki wo orignal refrence leta hai not a copy.

