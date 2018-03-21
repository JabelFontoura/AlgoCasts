// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

module.exports = function reverseInt(n) {
    // return solutionOne(n);
    // return solutionTwo(n);
    return solutionThree(n);
}

function solutionOne(n) {
    const negative = n.toString().indexOf('-') !== -1;
    let reversed = Math.abs(n).toString().split('').reverse().join('');

    reversed = negative ? `-${reversed}` : reversed;

    return parseInt(reversed);
}

function solutionTwo(n) {
    const reversed = n.toString().split('').reverse();

    if (Math.sign(n) === -1) {
        reversed.splice(0, 0, reversed[reversed.length - 1]);
        reversed.splice(reversed.length - 1 , 1);
    }
    
    return Number(reversed.join(''));
}

function solutionThree(n) {
    const reversed = n.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(n);
}
