// Write a JavaScript program to flatten object into single depth object.

// Input: 
// obj = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

// Output: 
// obj = {
//     Company: 'GeeksforGeeks',
//     Address: 'Noida',
//     contact: -999999908,
//     'mentor.HTML': 'GFG',
//     'mentor.CSS': 'GFG',
//     'mentor.JavaScript': 'GFG'
// }

obj = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: "+91-999999999",
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
};
console.log(flattenarr(obj));

function flattenarr(obj) {
    let res = {};
    for (const i in obj) {
        if ((typeof obj[i]) === 'object') {
            const temp = flattenarr(obj[i]);
            for (const j in temp) {
                res[i + '.' + j] = temp[j];
            }
        }
        else {
            res[i] = obj[i];
        }
    }
    return res;
}



