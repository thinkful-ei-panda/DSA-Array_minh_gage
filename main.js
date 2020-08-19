const Array = require('./prework/arrays/array');

const main = () =>{
  Array.SIZE_RATIO = 3;
  
  let arr = new Array();
  
  
  arr.push(3);
  console.log('push 1 call');
  arr.push(5);
  console.log('push 2 called');
  arr.push('3rd Item');
  console.log('push 3 called');
  arr.push(15);
  console.log('push 4 called');
  arr.push(19);
  console.log('push 5 called');
  arr.push(45);
  console.log('push 6 called');
  arr.push(10);
  console.log('push 7 called');

//   arr.push('tauhiba');

  console.log('the content info of the array (inside main.js l 13) is =>',arr);

  console.log(arr.get(0));
  
}; 

main();