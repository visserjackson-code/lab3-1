//Module 3.1 

//1. What are the results of these expressions?

("" + 1 + 0); // "10"

""- 1 + 0 // -1

true + false; // 1

!true //false

6 / "3" // 2

"2" * "3" // 6 

4 + 5 + "px" // "9px"


"$" + 4 + 5 // "$45"


"4" - 2 // 2


"4px" - 2 // NaN


" -9 " + 5 // " -9 5"


" -9 " - 5  // -14


null + 1 // 1


undefined + 1 // NaN


undefined == null // true

undefined === null // false


" \t \n" - 2 // -2 (on a new line)



//2 Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four // 34 (wrong answer) 
let additionCorrect = Number(three) + Number(four) // 7 (right answer)

let multiplication = three * four // 12 (right answer)
let division = three / four // .75 (right answer)
let subtraction = three - four // -1 (right answer

let lessThan1 = three < four //true (right answer but derived the wrong way )
let lessThan2 = thirty < four //true (wrong answer)
//because comparing strings like this can return unexpected results, we can use the Number function first before comparing

let lessThan1Correct = Number(three) < Number(four); // now this is true because 4 > 3
let lessThan2Correct = Number(thirty) < Number(four); // now this is false because 4 < 30

console.log(lessThan1, lessThan1Correct, lessThan2, lessThan2Correct); //true true true false

// 3. which of the console.log messages will print? Why?

if (0) console.log('#1 zero is true')  // will not print, 0 is false while 1 is true
if ("0") console.log('#2 zero is true') // this will print. the string exists, which counts as true so 
if (null) console.log('null is true') // will not print, null becomes 0 which is false
if (-1) console.log('negative is true')  // will print, a non-zero number is true
if (1) console.log('positive is true') // will print, 1 is true

// 4 Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
// and b. What does the ‘+=’ do?

let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}
// the += operator concatonates the string after it to the end of result (which is a string)

//formatting of the conditonal operator from js.info | let result = condition ? value1 (truthy) : value2 (not truthy);

let aNew = 7, bNew = 3

let resultNew = `${aNew} + ${bNew} is `;
aNew + bNew < 10 ? resultNew += 'less than 10' : resultNew += 'greater than or equal to 10'; //edited this so '7 + 3 is greater than 10' never prints

console.log(resultNew);

// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function
// syntax. Test each version to make sure they work the same.

function getGreeting(name) {
return 'Hello ' + name + '!';
}

const getGreetingExpression = function(name) {
    return `Hello ${name}!`
}

let myGreeting = getGreetingExpression('Jackson');
console.log(myGreeting);

const getGreetingArrow = (name2) => `Hello ${name2}!`;

let myGreeting2 = getGreetingArrow('quiescent'); //old gaming alias

console.log(myGreeting2);

// 6. a) Complete the inigo object by adding a lastName property and including it in the
// greeting.
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
// prints his famous catch phrase to the console. HINT: see
// https://www.imdb.com/title/tt0093779/characters/nm0001597.
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

const westley = {
name: 'Westley',
numFingers: 5
}
const rugen = {
name: 'Count Rugen',
numFingers: 6
}
const inigo = {
firstName: 'Inigo',
lastName: 'Montoya',
greeting(person) {
let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
console.log(greeting + this.getCatchPhrase(person));
},
getCatchPhrase: (person) =>
person.numFingers === 6 ? 'You killed my father. Prepare to die!' : 'Nice to meet you.'
}
inigo.greeting(westley);
inigo.greeting(rugen);

// 7. The following object represents a basketball game and keeps track of the score as the
// game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of
// the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to
// increment it, similar but separate to the score. Include the foul count in the half time and
// full time console messages
// d) Test your object by chaining all the method calls together in different combinations.

// 8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.
// b) Create a new object for a different city with different properties and call your function
// again with the new object.

const sydney = {
name: 'Sydney',
population: 5_121_000,
state: 'NSW',
founded: '26 January 1788*',
timezone: 'Australia/Sydney'
}

const seattle = {
    name: 'Seattle',
    population: 780_995,
    state: 'US_WA',
    founded: "November 13th, 1851*",
    timezone: "PST"

}

const printCity = (city) => {
    for (prop in city) {
        console.log(`${prop}: ${city[prop]}`);
    }
};

printCity(sydney);
printCity(seattle);
