// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

module.exports = function reverse(str) {
	// return solutionOne(str);
	// return solutionTwo(str);
	// return solutionThree(str);		
	return solutionFour(str);
}

function solutionOne(str) {
	let result = '';

	for (let i = str.length - 1; i >= 0; i--) 
			result += str[i];
	
	return result;
}

function solutionTwo(str) {
let reversed = '';

for (let character of str) {
	reversed = character + reversed;
}

return reversed;
}

function solutionThree(str) {
return str.split('').reverse().join('');
} 

function solutionFour(str) {
return str.split('').reduce((reversed, character) =>  character + reversed, '');
}
