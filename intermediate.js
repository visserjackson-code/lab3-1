// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.


const ucFirstLetters = (string) => {
    //split words into an array using space as delimiter
    const words = string.split(" ");
    //iterate over array and capitalize first letters, adding to string
    let result = "";
    for (let word of words) {
        result += word[0].toUpperCase();
        result += word.slice(1) + " ";
    }
    return result;
    

}

console.log(ucFirstLetters("los angeles") ) //Los Angeles
console.log('ucFirstLetters("Donec vitae aliquam metus. Sed euismod cursus dui vel aliquet.");: ', ucFirstLetters("Donec vitae aliquam metus. Sed euismod cursus dui vel aliquet."));
console.log('ucFirstLetters("Aliquam sem sapien, semper ut ultricies eu, pulvinar iaculis sem."): ', ucFirstLetters("Aliquam sem sapien, semper ut ultricies eu, pulvinar iaculis sem."));
//this is a real tweet from Kevin Durant's burner account
console.log('ucFirstLetters("Bills gotta think about moving Josh Allen to tight end and gettin a real quarterback n there"): ', ucFirstLetters("Bills gotta think about moving Josh Allen to tight end and gettin a real quarterback n there"));

// Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (...) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.

const truncate = (str, max) => {
    if (str.length > max) return str.slice(0, max) + "...";
    
    return str;
}

const truncateConditional = (str, max) => {
    return str.length > max ? str.slice(0, max) + "..." : str;
}

// truncate("test", 2)
// console.log('truncate("test", 2): ', truncate("test", 2));

// truncate("test", 5)
// console.log('truncate("test", 5): ', truncate("test", 5));

truncateConditional("test", 2)
console.log('truncateConditional("test", 2): ', truncateConditional("test", 2));

truncateConditional("test", 4)
console.log('truncateConditional("test", 4): ', truncateConditional("test", 4));


// 3. Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:

// https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Global_Objects/Array


// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.

const animals = ['Tiger', 'Giraffe'];

// a) Add 2 new values to the end
animals.push('Zebra', 'Horse');

// b) Add 2 new values to the beginning
animals.unshift('Human', 'Shark');

console.log(animals)

// c) Sort the values alphabetically
animals.sort((a, b) => {
    //ignore cases so we can properly compare
    const compareA = a.toUpperCase();
    const compareB = b.toUpperCase();

    if (compareA < compareB) return -1;

    if (compareA > compareB) return 1;

    return 0; //names are equal if return hasn't triggered up until now
});


console.log(animals);

// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue

const replaceMiddleAnimal = (newValue) => {
        return animals.splice(2, 1, newValue);
    }
   



// replaceMiddleAnimal("Dolphin");
// replaceMiddleAnimal("Hornet");
// replaceMiddleAnimal("Cheetah");

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.


const findMatchingAnimals = (beginsWith) => {
    if (typeof beginsWith !== 'string') return [];
    const prefix = beginsWith.toLowerCase();
    if (prefix.length !== 0) {
    return animals.filter(animal => animal.toLowerCase().startsWith(prefix));
    }
    return [];
}

findMatchingAnimals('H');
console.log('findMatchingAnimals(H): ', findMatchingAnimals('H'));
findMatchingAnimals("Zeb")
console.log('findMatchingAnimals("Zeb"): ', findMatchingAnimals("Zeb"));
findMatchingAnimals(true)
console.log('findMatchingAnimals(true): ', findMatchingAnimals(true));
findMatchingAnimals("")
console.log('findMatchingAnimals(""): ', findMatchingAnimals(""));


// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

const camelCase = (cssProp) => {
     //remove all dashes, then char + 1 needs to be toUppercase
    let reactProp = ""
    for (let i = 0; i < cssProp.length; i++) {
        if (cssProp[i] === "-") {
            reactProp += cssProp[i+1].toUpperCase();
            i++; //skip over css prop now
        }
        else {
            reactProp+= cssProp[i];
        }
    }
    return reactProp;
}


//for of loop, splitting and joining the screen

const camelCase2 = (cssProp) => {
    let split = cssProp.split("-")
    let reactProp = '';
    for (word of split) {
        word == split[0] ? reactProp += word : reactProp += (word[0].toUpperCase() + word.slice(1));
    }
    console.dir(reactProp);
    return reactProp;
}

//for in loop, though I have to track index because this is meant for objects.


const camelCase3 = (cssProp) => {
    let split = cssProp.split("-")
    let reactProp = '';
    for (let i in split) {
        //this is the clunkier solution imo so did the if else block here
        if (i == 0) {
            reactProp += split[i]
        }
        else {
            reactProp += (split[i][0].toUpperCase()) +split[i].slice(1);
        }
    }
    return reactProp;
}







camelCase("margin-left");
console.log('camelCase("margin-left");: ', camelCase("margin-left"));

camelCase2("background-color-red")
console.log('camelCase2("background-color-red"): ', camelCase2("background-color-red"));

camelCase3("what-is-going-on")
console.log('camelCase3("what-is-going-on"): ', camelCase3("what-is-going-on"));

let twentyCents = 0.20
let tenCents = 0.10
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
(fixedTwenty + fixedTen) //why is this not working?
console.log('(fixedTwenty + fixedTen) : ', (fixedTwenty + fixedTen));

/* a) Explain why the above code returns the wrong answer
        This returns the wrong answer because floating point numbers cant' be accurately converted to binary
b) Create a function currencyAddition(float1, float2) which safely adds the two
decimal numbers float1 and float2 and returns the correct float result.


c) Create a function currencyOperation(float1, float2, operation) which
safely performs the given operation (either +, -, / or *) on the two numbers and returns

the correct float result. https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/switch may be useful. */

const currencyAddition = (float1, float2) => {

    if(typeof float1 !== "number" || typeof float2 != "number") throw console.error("Both arguments must be numbers.");
    

        
    function getDecimals(float) {
        let parts = float.toString().split('.');
        return parts[1] ? parts[1].length : 0;

    }
    

     let max = Math.max(getDecimals(float1), getDecimals(float2)); //this is partly extension d), it supports different amounts by multiplying

     let num1 = float1 * Math.pow(10, max), num2 = float2 * Math.pow(10, max);
     let numTotal = num1 + num2;

     let newDecimals = numTotal / Math.pow(10, max);

     return newDecimals.toFixed(2);

    }
console.log('currencyAddition(twentyCents, tenCents);: ', currencyAddition(twentyCents, tenCents));


const currencyOperation =  (float1, float2, operation) => {

    operation = operation.toString();

     function getDecimals(float) {
        let parts = float.toString().split('.');
        return parts[1] ? parts[1].length : 0;

    }
    let max = Math.max(getDecimals(float1), getDecimals(float2)); 
    //extension d) is by default, base 10 so just takes the longest decimal and multiplies 10^that

    let num1 = float1 * Math.pow(10, max), num2 = float2 * Math.pow(10, max);

    let result = 0;
    switch(operation) {
        case "+": 
            result =  (num1 + num2) / Math.pow(10, max);
            break;
        
        case "-": 
            result = (num1 - num2) / Math.pow(10, max);
            break;

        case "*": 
             result = (num1 * num2) / (Math.pow(Math.pow(10, max), 2)); 
             break;
        
        case "/": 
             result = (num1 / num2);
             break;
        
        
        default: 

        throw new console.error("Invalid operand!");
    }        
    return result.toFixed(2);
}

currencyOperation(.5 , .2 , "-")
console.log('currencyOperation(1 .2 , "-"): ', currencyOperation(.5 , .2 , "-"));
currencyOperation(1.25, 3.00, "*");
console.log('currencyOperation(1.25, 3, "*"): ', currencyOperation(1.25, 3, "*"));
currencyOperation(6.50, 2, "/");
console.log('currencyOperation(6.50, 2, "/"): ', currencyOperation(6.50, 2, "/"));


// 6. Create a function unique(duplicatesArray) which takes an array parameter that may
// include duplicates. Your function should return an array containing only the unique values
// from duplicatesArray.
// Test with the following arrays and create another one of your own.

const unique = (duplicatesArray) => {
    let noDupes = [];

    for (item of duplicatesArray) {
        if(!noDupes.includes(item)) {
            noDupes.push(item);
        }
    }

    return noDupes;
}

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const mix = [true, false, true, "Zebra", "Horse", "Eleplant", "4", 4]
console.log(unique(colors)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(mix));


// Use the following array of book objects to practice the array functions for map, find and
// filter. Test each of your answers to the below tasks.


const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// Write a function getBookTitle(bookId) that uses the find function to return the
// title of the book object with the matching id.

const getBookTitle = (bookID) => {
    return books.find(item => item.id == bookID).title;
}
console.log('getBookTitle(4): ', getBookTitle(4));

// Write a function getOldBooks() that uses the filter function to return all book
// objects written before 1950.

const getOldBooks = () => {
        return books.filter(book => book.year < 1950);
}

console.log('getOldBooks(): ', getOldBooks());

// Write a function addGenre() that uses the map function to add a new genre property
// to all of the above books, with the value ‘classic’.

const addGenre = () => {
    books.map((book) => {
        book.genre = "Classic";
})
return books;
}

addGenre();
console.log('addGenre(): ', addGenre());

/* (Extension) Write a function getTitles(authorInitial) that uses map and
filter together to return an array of book titles for books written by authors whose
names start with authorInitial.
e) (Extension) Write a function latestBook() that uses find and forEach to get the
book with the most recent publication date.

//will circle back to this when I am more caught up - JV 2/22/26

*/

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

/* a) Create a new phoneBookDEF Map to store names beginning with D, E or F
b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
c) Update the phone number for Caroline
d) Write a function printPhoneBook(contacts) that prints the names and phone
numbers in the given Map
e) Combine the contents of the two individual Maps into a single phoneBook Map
f) Print out the full list of names in the combined phone book */


const phoneBookDEF = new Map([
    ['Danny Dimes', '3214321235'],
    ['Ekans', '5641235645'],
    ['Felloffafeller' , '5673458676']
])

phoneBookABC.set('Caroline', '3');

const printPhoneBookHelper = (value, key) => {
    console.log(`Name: ${key} Phone #: ${value} \n`);
}

const printPhoneBook = (contacts) => {
            contacts.forEach(printPhoneBookHelper)
    }


printPhoneBook(phoneBookABC);
console.log("---------------");
printPhoneBook(phoneBookDEF);
console.log("---------------");

const mergeMaps = (map1, map2) => {
  let combinedPhoneBook = new Map(map1);
  map2.forEach((v, k) => combinedPhoneBook.set(k, v));
  return combinedPhoneBook;
};

printPhoneBook(mergeMaps(phoneBookABC, phoneBookDEF));

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

/* Write a function sumSalaries(salaries) that calculates and returns the total of all
salaries
b) Write a function topEarner(salaries) that calculates and returns the name of the
person earning the highest salary */

const sumSalaries = (salaries) => {
  let total = 0;
  for (let value of Object.values(salaries)) {
    total += value;
  }
  return total;
};

const topEarner = (salaries) => {
  let moneybags = "";
  let topSal = 0;
  for (let [key, value] of Object.entries(salaries)) {
    value > topSal ? ((topSal = value), (moneybags = key)) : null;
  }

  return moneybags;
};

sumSalaries(salaries);
console.log("sumSalaries(salaries): ", sumSalaries(salaries));

topEarner(salaries);
console.log("topEarner(salaries): ", topEarner(salaries));


