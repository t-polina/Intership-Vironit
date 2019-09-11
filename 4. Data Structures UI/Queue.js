class Queue {
    constructor() {
        this.array = [];
        return Queue.count++;
    }
    push(value) {
        this.array.push(value);
        return value;
    }
    pop() {
        this.array.forEach((element,index) => {
            this.array[index]=this.array[index+1]
        });
        this.array.pop();
        return this.array;
    }
    getCount(){
        return Queue.count;
    }
    setCount(){
        Queue.count--;
    }
}
Queue.count=0;