/* eslint-disable eqeqeq */
const Memory = require('../memory/memory');
/*resize after every push */
/*=============================================================*/
/*
class Array {
  constructor(){
    this.length = 0 ; 
    this.ptr = Memory.allocate(this.length);
  }
  push(value) { 
    this._resize(this.length + 1 );
    Memory.set(this.ptr + this.length, value);
    this.length++;
  }
  get(index) {
      if(index < 0 || index >= this.length){
        throw new Error('Index error');
      }
      return Memory.get(this.ptr + index);
  }
  pop() {
      if(this.length == 0){
          throw new Error('Index error');
      }
      const value = Memory.get(this.ptr + this.length - 1)
      this.length--;
      return value;
  }
  insert(index,value){
      if(index < 0|| index >= this.length){
          throw new Error('Index error');
      }
      if(this.length >= this._capacity){
          this._resize((this.length + 1) * Array.SIZE_RATIO);
      }

      Memory.copy(this.ptr + index + 1 , this.ptr + index, this.length - index);
      Memory.set(this.ptr + index, value);
      this.length++;
  }
  remove(index){
      if(index < 0 || index >= this.length - 1 ) {
          throw new Error ('Index error');
      }
      Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
      this.length--;
  }
  _resize(size) { 
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    if (!this.ptr) {
      throw new Error('Out of Memory ');
    }
    Memory.copy(this.ptr, oldPtr, this.length);
    Memory.free(oldPtr);
  }

}
*/
/*========================================================== */

/*
make more space then nasary, 
so you don't have to resize after every push 
*/
/*===========================================================*/
const memory = new Memory();
class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }
  push(value) {
    if (this.length >= this._capacity){
      this._resize((this.length + 1 ) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }
  get(index) {
    if(index < 0 || index >= this.length){
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }
  pop() {
    if(this.length == 0){
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
  insert(index,value){
    if(index < 0|| index >= this.length){
      throw new Error('Index error');
    }
    if(this.length >= this._capacity){
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1 , this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }
  remove(index){
    if(index < 0 || index >= this.length - 1 ) {
      throw new Error ('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr == null){
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size ; 
  }
}
Array.SIZE_RATIO = 3;

// export default {Array};
module.exports = Array; 

/*==========================================================*/
