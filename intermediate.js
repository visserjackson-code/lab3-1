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
            i++; //skip over css prop 
        }
    }
}



