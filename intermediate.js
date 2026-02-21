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
