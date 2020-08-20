/* eslint-disable quotes */
let test = [1,5,3,45,2,78,4,12,6,5,0];


const filter = arr => {
  if(!Array.isArray(arr)){
    throw new Error(`the value that was entered was not an array`);
  }
  let res = [];
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] >= 5){
      res.push(arr[i]);
    }
  }
  return res; 
};

console.log(filter(test));