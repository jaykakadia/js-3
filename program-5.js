// Write a JavaScript program to count number of occurrences of repeated names in an array of objects.

// Input:  
// arr = [
//     {
//        employeeName: "Ram",
//        employeeId: 23
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 24
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 21
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 25
//     },
//     {
//        employeeName: "Kisan",
//        employeeId: 22
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 20
//     }
//  ]

// Output: 
// [
//     {employeeName: "Ram", occurrences: 3},
//     {employeeName: "Shyam", occurrences: 2},
//     {employeeName: "Kisan", occurrences:  1}
// ] 
const arr = [
    {
        employeeName: "Ram",
        employeeId: 23
    },
    {
        employeeName: "Shyam",
        employeeId: 24
    },
    {
        employeeName: "Ram",
        employeeId: 21
    },
    {
        employeeName: "Ram",
        employeeId: 25
    },
    {
        employeeName: "Kisan",
        employeeId: 22
    },
    {
        employeeName: "Shyam",
        employeeId: 20
    }
];


function countOccurrences(arr) {
  const output = [];
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const name = arr[i].employeeName;
    if (map[name]){
      map[name]++;
    }else{
      map[name] = 1;
    }
  }
  const keysarr = Object.keys(map);
  for(let i = 0; i < keysarr.length; i++){
    output.push({employeeName: keysarr[i], occurance: map[keysarr[i]]});
  }
  return output;
}
console.log(countOccurrences(arr));

