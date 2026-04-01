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

const obj = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: "+91-999999999",
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG",
    },
};
console.log(flattenarr(obj));

function flattenarr(obj) {
    const res = {};
    for (let i = 0; i < Object.keys(obj).length; i++) {
        let key = Object.keys(obj)[i];
        if (typeof obj[key] === "object") {
            const temp = flattenarr(obj[key]);
            for (const j in temp) {
                res[key + "." + j] = temp[j];
            }
        } else {
            res[key] = obj[key];
        }
    }
    return res;
}
