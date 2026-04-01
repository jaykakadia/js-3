// Write a JavaScript program to count frequency of character in string.

// Input: "hello"
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }

function charFrequency(str) {
    const result = {};
    // str = str.replace(" ", "");
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " "){
            continue;
        }else {
            if (result[str[i]]) {
                result[str[i]]++;
            } else {
                result[str[i]] = 1;
            }
        }
    }
    return result;
}
console.log(charFrequency("hell. '' \"\"oolo"));