// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

module.exports = function maxChar(str) {
    return solutionOne(str);
}

function solutionOne(str) {
    const map = [];

    for (let char of str) {
        const existent = map.find(item => item.char === char);

        if (existent) 
            existent.count++;
        else
            map.push({ char, count: 1 });
    }

    return map.reduce((a, b) => a.count > b.count ? a : b).char;
}
