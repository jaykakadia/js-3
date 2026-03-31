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
    let arr1 = [...set1];
    let arr2 = [...set2];
    for(let i = 0; i < set1.size; i++) {
        let contains = false;
        for(let j = 0; j < set2.size; j++) {
             if(arr1[i] === arr2[j]) {
                contains = true;
                break;
             }
        }
        if(!contains) {
            return false;
        }
    }
    return true;
}

console.log(isSubset(set1, set2));

let set3 = new Set([3, 4]);
let set4 = new Set([1, 2, 3, 4, 5]);
console.log(isSubset(set3, set4));