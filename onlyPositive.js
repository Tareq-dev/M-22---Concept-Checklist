
function getPositives(ar){
     const posArr = ar.filter(num => num > 0);
     return posArr;
 }

const numbers = [4,8,6,9,7,8,-5,-7,-6,10,78,45,65];
const arrayNumbers = getPositives(numbers);


console.log(arrayNumbers);
