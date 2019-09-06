class Queue {
    constructor(arr = []) {
        this.arr = arr;
    }
    returnQueue() {
        // return this.arr;
        console.log(this.arr);
    }
    push(value) {
        this.arr.push(value);
    }
    
    pop() {
        this.arr.forEach((element,index) => {
            this.arr[index]=this.arr[index+1]
        });
        this.arr.pop();
    }
}
let queue = new Queue([1,2,3,4])
queue.pop();
queue.returnQueue();