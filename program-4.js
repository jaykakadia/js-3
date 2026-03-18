// Write a JavaScript program to get the index of an object by it's property.

// Input:  
// arrayObj = [{
//     prop_1: 'val_1',
//     prop_2: 'val_2',
//     prop_3: 'val_3'
// }, {
//     prop_1: 'val_4',
//     prop_2: 'val_5',
//     prop_3: 'val_6'
// }];

// Output: 1 (index of an object for prop_1: 'val_4')

const arrayObj = [{
    prop_1: 'val_1',
    prop_2: 'val_2',
    prop_3: 'val_3'
}, {
    prop_1: 'val_4',
    prop_2: 'val_5',
    prop_3: 'val_6'
}];

function getIndexByProperty(arr, key, value) {
    return arr.findIndex(obj => obj[key] === value);
}

console.log(getIndexByProperty(arrayObj, 'prop_1', 'val_4'));  // 1
console.log(getIndexByProperty(arrayObj, 'prop_2', 'val_2'));  // 0
console.log(getIndexByProperty(arrayObj, 'prop_1', 'val_10')); // -1 (not found)  


