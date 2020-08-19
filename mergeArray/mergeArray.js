const testArray1 = [1, 3, 6, 8, 11]; 
const testArray2 = [2, 3, 5, 8, 9, 10];


const merge = (arrOne,arrTwo) => {
  /*could put an error handler... but time */
  
  let res = [];
  let i = 0;
  let j = 0;
  while(i < arrOne.length && j < arrTwo.length){
    if(arrOne[i] <= arrTwo[j]){
      res.push(arrOne[i++]);
    }else{
      res.push(arrTwo[j++]);
    }
  }
  if(j < arrTwo.length){ 
    i = j ;
    arrOne = arrTwo;
  }
  while(i < arrOne.length){
    res.push(arrOne[i++]);
  }
  
  return res;
};


const mergeShort =( arr1, arr2) => [...arr1,...arr2].sort((a,b)=> a-b);


console.time('one line')
console.log(mergeShort(testArray1,testArray2));
console.timeEnd('one line')

console.time('with a while loop')
console.log(merge(testArray1,testArray2));
console.timeEnd('with a while loop')