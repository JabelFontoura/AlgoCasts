// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

module.exports = function palindrome(str) {
    // return solutionOne(str);
    // return solutionTwo(str);
    // return solutionThree(str);
    return solutionFour(str);
};

function solutionOne(str) {
    for (let i = 0; i < str.length / 2; i++)
        if (str[i] !== str[str.length - 1 - i])
            return false;
    
    return true;
}

function solutionTwo(str) { 
    return str === str.split('').reverse().join('');
}

function solutionThree(str) {
    const arr = str.split('');

    return arr.slice(0, arr.length / 2).every(character => arr.slice(arr.length / 2).includes(character));
}

function solutionFour(str) {
    return str.split('').every((character, index, array) => character === array[array.length - 1 - index]);
}
