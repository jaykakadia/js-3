
const obj = {
    Company: 'GeeksforGeeks',
    Address: 'Noida',
    contact: -999999908,
    'mentor.HTML': 'GFG',
    'mentor.CSS': 'GFG',
    'mentor.JavaScript': 'GFG'
}
flattern(obj);
function flattern(obj){
    const result = {};
    const objectKeysArr = Object.keys(obj);
    for (let i = 0; i < objectKeysArr.length; i++) {
        const currKey = objectKeysArr[i];
        if (typeof[currKey] === 'object'){
            const temp = flattern(currKey);
            for(let j = 0; j < Object.keys(temp).length; j++) {
                result[currKey + "." + Object.keys(temp)[j]] = temp[j];
            }
        }else{
            result[key] = obj[key];
        }
    }
    return result;
}
console.log(flattern(obj))