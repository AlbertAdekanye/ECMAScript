// Compare Scopes of the var and let Keywords
function checkScope (){
    "use strict";
    let i = "function scope";
    if (true){
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
checkScope();


// Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace(){
    "use strict";
    // s = [2, 5, 7]; <- this is invalid
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s);

// Prevent Object Mutation
function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try{
        MATH_CONSTANTS.PI = 99;
    } catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

// we use arrow functions to write anonymous functions
const magic =() => new Date();