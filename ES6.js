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

// we can write arrow functions with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// we can write arrow functions with default parameters
const increment = (number, value = 1) => number + value;
console.log(increment(5, 2));

const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("Albert"));
console.log(greeting());

// Use the Rest Parameter with Function Parameters
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));

// Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['jan', 'feb', 'mar', 'apr', 'may'];
let arr2;
arr2 = [...arr1];
console.log(arr2);