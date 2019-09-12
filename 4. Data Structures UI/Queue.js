class Queue {
    constructor() {
        this.array = [];
        return Queue.count++; // How you use it?  Constructor shouldn't return any values
    }
    push(value) {
        this.array.push(value);
        return value; // Why did you returns value?
    }
    pop() { // Please write me to skype that this method do
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
