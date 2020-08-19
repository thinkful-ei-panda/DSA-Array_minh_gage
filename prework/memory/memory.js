class Memory {
  constructor() {
    this.memory = new Float64Array(1024);
    this.head = 0;
  }
  
  allocate(size) {
    //console.log(`size = ${size}, head = ${this.head}, memory = ${this.memory}`);
    if (this.head + size > this.memory.length) {
      return null;
    }
  
    let start = this.head;
  
    this.head += size;
    return start;
  }
  
  free(ptr) {}
  
  copy(toIdx, fromIdx, size) {
    if (fromIdx === toIdx) {
      return;
    }
  
    if (fromIdx > toIdx) {
      // Iterate forwards
      for (let i = 0; i < size; i++) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    } else {
      // Iterate backwards
      for (let i = size - 1; i >= 0; i--) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    }
  }
  
  get(ptr) {
    console.log(`in Memeory, the typeof index of get(index) is ${typeof ptr}`);

    return this.memory[ptr];
  }
  
  set(ptr, value) {
    this.memory[ptr] = value;
  }
}
  
module.exports = Memory;