// Write a JavaScript program to generate all combinations of a string.

// Input: Dog 
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]


function generateCombinations(str) {
    const combinations = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            const currstr = str.substring(i, j);
            if (!combinations.includes(currstr)) combinations.push(currstr);
        }
    }
    return combinations;
    
}

console.log(generateCombinations("aaaaaa"));

