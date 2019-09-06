class Stack {
    constructor(arr = []) {
        this.arr = arr;
    }
    returnStack() {
        return this.arr;
    }
    push(value) {
        this.arr.push(value);
    }
    pop() {
        this.arr.pop();
    }
}
let stack = new Stack()
stack.push(2);
stack.returnStack();
stack.push(3);
stack.push(5);
stack.returnStack();
stack.pop();
stack.pop();
stack.returnStack();