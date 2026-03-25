let input = "hello";
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }

function charFrequency(str) {
  let result = {};
  for (let i = 0; i < str.length; i++){
    let curr = str[i];
    if(!result[curr]){
      result[curr] = 1; 
    }else{
      result[curr]++;
    }
  }
  return result;
}
console.log(charFrequency("helloolo"));
