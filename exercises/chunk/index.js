// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

module.exports = function chunk(array, size) {
    // return solutionOne(array, size);
    // return solutionTwo(array, size);
    return solutionThree(array, size);
}

function solutionOne(array, size) {
    const  result = [];

    while (array.length >= 1) {
        result.push(array.slice(0, size));
        array = array.slice(size);
    }

    return result;
}

function solutionTwo(array, size) {
    const chunked = [];

    for (let item of array) {
        const last  = chunked[chunked.length - 1];

        if (!last || last.length === size) 
            chunked.push([item]);
        else
            last.push(item);
    }

    return chunked;
}

function solutionThree(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}
