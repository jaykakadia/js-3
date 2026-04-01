// Write a JavaScript program to find intersection of two sets.

// Input: 
// let set1 = new Set([1, 2, 3, 4]);
// let set2 = new Set([3, 4, 5, 6]);

// Output: [3, 4]

const set1 = new Set([1, 2, 3, 4, 3]);
const set2 = new Set([3, 4, 5, 6]);

function intersection(set1, set2) {
    const result = [];
    const arr1 = [...set1];
    const arr2 = [...set2];
    for (let i = 0 ; i < set1.size; i++) {
        const curr = arr1[i];
        for(let j = 0; j < set2.size; j++) {
            if(curr === arr2[j]) {
                result.push(curr);
            }        
        }
        
    }
    return result;
}
console.log(intersection(set1, set2));