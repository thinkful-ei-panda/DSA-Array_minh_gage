# question answers 

### Part 1
##### make Array class from scratch.
`no question`

### Part 2
##### Explore the push() method
make main function `can been seen in push/push.js`

* what is the length, and capacity and memory address of the array? 
`0` because pointer's value is zero
i.e. `Array { length: 1, _capacity: 3, ptr: 0 }` 

* What is the length, capacity and memory address of your array? 
    Explain the result of your program after adding the new lines of code.
`Array { length: 6, _capacity: 12, ptr: 3 }`
`length : 6` , `capacity :12` and the memory address is `Float64Array(1024)`(*i could be wrong*)


### Part 3
##### Exploring the pop() method

* What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.

if there is content in the array it will remove said content at the end of the array, reduce the length by one

but... if there is nothing to be removed it throw an error of `throw new Error('Index error');`
witch i originally ran into when i first made pop.js (found at `pop/pop.js`) since i didn't make anything to seed the array with...

```
$ node pop/pop.js 
the Arrays contents after 4 push's is Array { length: 4, _capacity: 12, ptr: 3 }
the Arrays content is  Array { length: 0, _capacity: 12, ptr: 3 } after one pop()
```

### Part 4
##### Understanding more about how arrays work

* Print the 1st item in the array arr.

    should get `3` if  3 was the 1st value pushed and your using `arr.get(0)`

* Empty the array and add just 1 item: arr.push("tauhida");

- `done`

* Print this 1 item that you just added. What is the result? Can you explain your result?

`NaN`

if i had to guess it as something to do with the fact that memory is basically a clone of the  Float64Array(1024) class object 


* What is the purpose of the _resize() function in your Array class?

    the resize function servers the peruse of resetting the pointer, and making sure that the arrays contents do not excide it's memory complicity


### Part 5
##### URLify a string

A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

- Input: tauhida parveen

- Output: tauhida%20parveen

- Input: www.thinkful.com /tauh ida parv een

- Output: www.thinkful.com%20/tauh%20ida%20parv%20een


```
const urlFixer = str => {
  if(typeof str !== 'string' || str.length < 0){
    return 'the argument being passed is not a string';
  }
  let res = '';
  for(let i = 0 ; i < str.length; i++){
    if(str[i] === ' '){
      res += '%20';
    }else{
      res += str[i];
    }
  }
  return res; 
};
```


### Part 6
##### Filtering an array

- Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.



```
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
```

res == `[ 5, 45, 78, 12, 6, 5 ]`
from a test case of ` let test = [1,5,3,45,2,78,4,12,6,5,0];`

even though i feel like there might be a better way to do this. since this makes me wonder what happends to the memory of arr since i'm just pushing the "passable" content on to a new array to avoid passing back an array with blank content?
when i tried writhing the code's if results using
```
if(arr[i] < 5){
    delete arr[i]
}  
```
it would pass back a string of 

`[<1 empty item>, 5,<1 empty item>, 45,<1 empty item>,78,<1 empty item>, 12, 6, 5, <1 empty item>]`



### Part 7
##### Max sum in the array

You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

- Input: [4, 6, -3, 5, -2, 1] 
- Output: 12... (눈_눈) wait a sec.. 
> in the context of given the 2 GREATEST number out of the array. what is the sum i.e. `5 + 6`


```
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
```

... or 

```
const sumOfGreaderButCooler = arr =>{
  const l = arr.length;
  arr.sort((a,b)=> a-b); 
  if(arr.length === 1){return arr[0];}else if(!arr.length){return 'n/a';}
  return arr[l-1] + arr[l-2];
};
```

both return `19` out of a test array of 
`[1,7,3,-1,4,12,3]`


### Part 8
##### Merge arrays

Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

- Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
- Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]


beta fast code with low O() value
```
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
```

chad one line code
```
const mergeShort =( arr1, arr2) => [...arr1,...arr2].sort((a,b)=> a-b);
```

### Part 9
##### Remove characters

Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

- Input:`'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'`
- Output: `'Bttl f th Vwls: Hw vs. Grzny'`

```
const wordRemoval = (str,reg) =>{
  let res = '';

  for(let i = 0 ; i < str.length ; i++){
    let j = 0; 
    let on = true; 
    while( on ){

      if((j + 1) === reg.length && str[i] !== reg[j] ){ res += str[i] , on = !on ;}

      if(str[i] !== reg[j]){j++;}else{on = !on;}

    }
  }
  return res;
};
```


### Part 10
##### Products

Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. See the following example input and output.

- Input:[1, 3, 9, 4]
- Output:[108, 36, 12, 27]
i.e.for index of  0 (being `1`)`3*9*4` and for 1 (being `3`) `1*9*4`

```
const products = arr => {

  let res = [];

  for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < arr. length ; j++){
      if(i !== j){
        if(res[i] == null){
          res.push(arr[j]);
        }else{
          res[i] *= arr[j];
        }    
      }
    }
  }
  return res; 
};
```
idk if you can get any better then `O(n^2)`

### Part 11
##### 2D array3

Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

- Input:
```
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];
```
- Output:
```
[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]];
```

..... who ever came up with test must hate puppy and apple pie 

```
const rowFix = test => {
  let res = [];


  for(let i = 0 ; i < test.length ; i++){
    res.push([]);
    for(let j = 0 ; j < test[i].length ; j++ ){
      res[i].push(1);
    }
  }
  for(let i = 0 ; i < test.length ; i++){
    for(let j = 0 ; j < test[i].length ; j++ ){
      if(test[i][j] === 0 ){
        let x = i;
        let y = 0;
        while(x < test.length){
          res[x][j] = 0;
          x++;
        }
        while(y < test[i].length){
          res[i][y] = 0;
          y++;
        } 
      }
    }
  }
  return res; 
};
```
it's an ...`o(2n^2)`? 
i know i could make it better but it's 2332 atm..


### part 12
##### String rotation

Given 2 strings, `str1` and `str2`, write a program that checks if `str2` is a rotation of `str1`.

- Input: `amazon`, `azonma`

- Output: `False`

- Input: `amazon`, `azonam`

- Output: `true`