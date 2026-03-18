// Write a JavaScript program to group elements by their properties.

// Input:
// arr = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Alice" },
// ]

// Output:
// { 'John' => [ 1 ], 'Alice' => [ 2, 4 ], 'Bob' => [ 3 ] }

let arr = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Alice" },
]

function groupElementsByProperty(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        if (result[arr[i].name]) {
            result[arr[i].name].push(arr[i].id);
        } else {
            result[arr[i].name] = [arr[i].id];
        }
    }
    return result;
}
console.log(groupElementsByProperty(arr));
    