//Palindrome
//Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

const input = prompt("Enter a word or sentence:");
const result = isPalindrome(input) ? "It is a palindrome." : "It is not a palindrome.";
console.log(result);
