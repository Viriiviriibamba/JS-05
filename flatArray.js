//Flat array
//Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...
//let multiDimension = [1, [2, 3, [4, 5, [6]]]];

function flattenArray(arr) {
    return arr.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
    }, []);
}

const multiDimension = [1, [2, 3, [4, 5, [6]]]];
const flatArray = flattenArray(multiDimension);
console.log(flatArray);

