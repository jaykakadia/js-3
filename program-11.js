// Write a JavaScript program to check a given string is an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true

function isAnagram(str1, str2) {
    const count = {};
     
     for (let i = 0; i < str1.length; i++) {
       const ch = str1[i];
       count[ch] = (count[ch] || 0) + 1;
     }

     for (let i = 0; i < str2.length; i++) {
       const ch = str2[i];

       if (!count[ch]) return false;
       count[ch]--;
     }
    return true;
}
console.log(isAnagram("evi l", "v  ile"));
console.log(isAnagram("a gentleman", "elegant man"));
console.log(isAnagram("eleven plus two", "twelve plus one"));   
console.log(isAnagram("hello", "Wp"));
