// Immediately Invoked Function Expressions (IIFS)
// KOI FUNCTION  HMKO TURANT EXCQUTE OR USE KARNA HO TAB USE KARTE HAI 

(function chai(){
    console.log('DB CONNECTED');

})();
// ; THIS IS USE TO END .

// THIS IS NORMAL FUNCTION 
//  EXECUTE FUNCTION BUT SHOW A RED LINE
//() AGAR FUNCTION KE UPPER PARENTHISES () USE KAR DE THO USKO INVOKED KAR SAKTE HAI..
// () USE KARNE PER FUNCTION EK BLOG KE TARAH USE KAR SAKTE HAI


//  global scope ke pollution mai problem hoti hai kai bar..
// global scope ke polution or varable ho hatane ke liye we can use a IIFE..


//ARROW FUNCTION

((name)=>{
    console.log('DB CONNECTED TWO ${name}');
})('aman');