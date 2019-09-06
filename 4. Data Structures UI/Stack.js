// const stack = (function () {
    class Stack{
        constructor(){
            this.array=[];
        }
        push(value){
            this.array.push(value);
            return this.array;
        }
        pop(){
            this.array.pop();
            return this.array
        }
    }
//     return Stack;
// }());