const Array = require('./prework/arrays/array');

const main = () =>{
  Array.SIZE_RATIO = 3;
  
  let arr = new Array();
  
  
  arr.push(1);
  arr.push('2nd Item');
  arr.push('3rd Item');
  arr.push('4th Item');
  console.log('the content info of the array (inside main.js l 13) is =>',arr);

  console.log(arr.get(1).toString());
  
}; 

main();