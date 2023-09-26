function reverseString(str) {
    return str.split("").reverse().join("");
}

function removePunctuation(str) {
    str = str.replace(/[^\w\s\']|_/g, "")
         .replace(/\s+/g, "");
    
    return str;
}


const palindromes = function (candidateString) {
    candidateString=removePunctuation(candidateString);
    candidateString=candidateString.toLowerCase();
    return candidateString==reverseString(candidateString);
};

// Do not edit below this line
module.exports = palindromes;
