/* eslint-disable quotes */
const Array = require('../prework/arrays/array');

const main = () =>{
  Array.SIZE_RATIO = 3;

  let arr = new Array();


  arr.push(1);
  arr.push(1);
  arr.push(1);
  arr.push(1);

  console.log(`the Arrays contents after 4 push's is`, arr);

  arr.pop();


  console.log(`the Arrays content is `,arr,`after one pop() `);


}; 

main();