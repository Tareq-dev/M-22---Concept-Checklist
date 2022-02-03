function largestString(array){

let largest = array[0].length;
let long = array[0];

for (let i = 0; i < array.length; i++){

     const maxString = array[i];
     if(maxString > long){
          long = maxString;
     }
}

return long;
}

const New_array = ['aa','asdf','asdfg','erereerer']

const longString = largestString(New_array);

console.log(longString);