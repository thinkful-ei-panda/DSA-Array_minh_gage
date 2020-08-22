const testArray1 = [1, 3, 6, 8, 11]; 
const testArray2 = [2, 3, 5, 8, 9, 10];



const re = () => {
  const res = [];
  for(let i = 0 ; i < 10000000 ; i++){
    res.push(i);
  }
  return res;
};
const re2 = () => {
  const res = [];
  for(let i = 1 ; i < 10000000 ; i++){
    res.push(i);
  }
  return res;
};
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


const mergeShort = ( arr1, arr2) => [...arr1,...arr2].sort((a,b)=> a-b);

let large1 = re();
let large2 = re2();

console.time('one line');
console.log(mergeShort(large1,large2));
console.timeEnd('one line');

console.time('with a while loop');
console.log(merge(large1,large2));
console.timeEnd('with a while loop');