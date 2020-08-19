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
...... :| ahhhhhhh


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

* Empty the array and add just 1 item: arr.push("tauhida");

* Print this 1 item that you just added. What is the result? Can you explain your result?

* What is the purpose of the _resize() function in your Array class?

### Part 5
##### URLify a string


### Part 6
##### Filtering an array


### Part 7
##### Max sum in the array


### Part 8
##### Merge arrays



### Part 9
##### Remove characters


### Part 10
##### Products


### Part 11
##### 2D array

### part 12
##### String rotation

