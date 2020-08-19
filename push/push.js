
const Array = require('../prework/arrays/array');
const Memory = require('../prework/memory/memory');


const memory = new Memory();

const main = () => {
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  

  console.log(arr);
};


main();