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

// Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES1 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80,
}
const {today, tomorrow, yesterday} = HIGH_TEMPERATURES;
console.log(today, tomorrow, yesterday);

// Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80,
}
// const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
console.log(highToday, highTomorrow);

// Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
    today: {low: 72, high: 83},
    tomorrow: {low: 73.3, high: 84.6},
}
const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
console.log(lowToday, highToday);

// Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
[a, b] = [b, a];
console.log(a, b);

// Destructuring via rest elements
function removeFirstTwo(list){
    const [ , , ...arr] = list;
    return arr;
}
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(removeFirstTwo(arr));

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85,
}
const half = ({max, min}) => (max + min) / 2.0;
console.log(half(stats));

// create strings using template literals
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"],
}
function makeList(arr){
    const failureItems = [];
    for (let i = 0; i < arr.length; i++){
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList);

// Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson())

// write concise declarative functions
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
console.log(bicycle.setGear(3));

// Use class Syntax to Define a Constructor Function
class Vegetable {
    constructor(name){
        this.name = name;
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);

class ea {
    constructor(name){
        this.name = name;
    }
}
const electronicArts = new ea('electronic arts');
console.log(electronicArts.name);


class Thermostat {
    constructor(fahrenheit){
        this.fahrenheit = fahrenheit;
    }
    get temperature(){
        return 5 / 9 * (this.fahrenheit - 32);
    }
    set temperature(celsius){
        this.fahrenheit = celsius * 9.0 / 5 + 32;
    }
}
const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 26;   
temp = thermos.temperature;
console.log(temp);
