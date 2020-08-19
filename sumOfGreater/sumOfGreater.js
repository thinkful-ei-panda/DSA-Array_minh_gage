const test = [1,7,3,-1,4,12,3]; // should return 12 + 7 == 19


const sumOfGreater = arr => {
  if(!Array.isArray(arr)){
    throw new Error('the content of the augment is invalid ');
  }

  let a = 0;
  let b = 0;

  for(let i = 0 ; i < arr.length ; i++ ){
    if(a < arr[i]){
      if(a > b){
        b=a;//jesus this took to long
      }
      a = arr[i];
    }else if(b < arr[i]){
      b = arr[i];
    }
  }
  return a+b;
};

console.log(sumOfGreater(test));


const sumOfGreaderButCooler = arr =>{
  const l = arr.length;
  arr.sort((a,b)=> a-b); 
  if(arr.length === 1){return arr[0];}else if(!arr.length){return 'n/a';}
  return arr[l-1] + arr[l-2];
}; 
    

console.log(sumOfGreaderButCooler(test));