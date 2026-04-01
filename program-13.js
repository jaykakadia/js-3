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

const arr = [
    { id: 1, name: "John", age: 25 },
    { id: 1, name: "jay", age: 25 },
    { id: 2, name: "Alice", age: 26 },
    { id: 3, name: "Bob", age: 29 },
    { id: 4, name: "Alice", age: 27 },
];
function groupElementsByProperty(arr, prop, valueKey) {
    const res = {};
    for (let i = 0; i < arr.length; i++) {
      const key = arr[i][prop]; 
      const value = arr[i][valueKey];
      if (res[key] == undefined) {
          res[key] = [];
      }
      res[key][res[key].length] = value;
    }

    return res;
}

console.log(groupElementsByProperty(arr, "age", "name"));
    