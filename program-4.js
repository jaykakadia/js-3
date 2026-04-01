// // Write a JavaScript program to get the index of an object by it's property.

// // Input:
// // arrayObj = [{
// //     prop_1: 'val_1',
// //     prop_2: 'val_2',
// //     prop_3: 'val_3'
// // }, {
// //     prop_1: 'val_4',
// //     prop_2: 'val_5',
// //     prop_3: 'val_6'
// // }];

// // Output: 1 (index of an object for prop_1: 'val_4')

const arrayObj = [
    { prop_1: "val_4", prop_2: "val_5", prop_3: "val_6", prop_4: { id: 1 } },
    {
        prop_1: "val_7",
        prop_2: "val_8",
        prop_3: "val_9",
        prop_5: () => "This is a Jimmy",
    },
];

// function getIndexByProperty(arr, key, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i][key] == value) return i;
//     }
//     return -1;
// }

// console.log(getIndexByProperty(arrayObj, "prop_4", { id: 1 }));
// console.log(getIndexByProperty(arrayObj, "prop_2", "val_2"));
// console.log(getIndexByProperty(arrayObj, "prop_1", "val_10"));

function isEqual(a, b) {
    if (typeof a !== "object" || typeof b !== "object") {
        return a === b;
    }
    if (a == null || b == null) return a === b;
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (let i = 0; i < keysA.length; i++) {
        const key = keysA[i];
        if (a[key] !== b[key]) return false;
    }
    return true;
}

function getIndexByProperty(arr, key, value) {
    for (let i = 0; i < arr.length; i++) {
        if (isEqual(arr[i][key], value)) {
            return i;
        }
    }
    return -1;
}

console.log(getIndexByProperty(arrayObj, "prop_4", { id: 1 }));
