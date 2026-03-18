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
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        if (result.some(item => item.employeeName === arr[i].employeeName)) {
            continue;
        }
        for (let j = 0; j < arr.length; j++) {
            if (arr[i].employeeName === arr[j].employeeName) {
                count++;
            }
        }
        result.push({ employeeName: arr[i].employeeName, occurrences: count });
    }
    return result;
}
console.log(countOccurrences(arr));