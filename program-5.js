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
  for (let i = 0; i < arr.length; i++) {
    let already_count = false;
    for (let j = 0; j < output.length; j++) {
      if (arr[i].employeeName == output[j].employeeName) {
        already_count = true;
        break;
      }
    }
    if (!already_count) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i].employeeName == arr[j].employeeName) {
          count++;
        }
      }
      output.push({ employeeName: arr[i].employeeName, occurance: count });
    }
  }
  return output;
}
console.log(countOccurrences(arr));

console.log(countOccurrences(arr));