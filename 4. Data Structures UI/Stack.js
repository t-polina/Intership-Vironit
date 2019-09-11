class Stack{
    constructor(){
        this.array=[];
        return Stack.count++;
    }
    push(value){
        this.array.push(value);
        return value;
    }
    pop(){
        this.array.pop();
        return this.array
    }
    getCount(){
        return Stack.count;
    }
    setCount(){
        Stack.count--;
    }
}
 Stack.count=0;
