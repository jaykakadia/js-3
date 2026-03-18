// Write a JavaScript program to check subset.

// Example 1:
// Input: 
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4]);

// Output: false


// Example 2:
// Input: 
// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

// Output: true

let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([3, 4]);

function isSubset(set1, set2) {
    
    for (let i of set2) {
        if (!set1.has(i)) {
            return false;
        }
    }
    return true;
}
console.log(isSubset(set1, set2));

let set3 = new Set([3, 4]);
let set4 = new Set([1, 2, 3, 4, 5]);
console.log(isSubset(set3, set4));