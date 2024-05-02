//Highest number
//Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.

function findHighestNumber() {
    let highest = -Infinity;
    for (let i = 0; i < 10; i++) {
        const number = parseFloat(prompt(`Enter number ${i + 1}:`));
        if (!isNaN(number) && number > highest) {
            highest = number;
        }
    }
    return highest;
}

const highestNumber = findHighestNumber();
console.log(`The highest number is: ${highestNumber}`);
