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