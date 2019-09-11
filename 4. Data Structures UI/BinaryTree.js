class BinaryTree {
    constructor() {
        this.root = null;
        this.current;
        this.n;
        BinaryTree.count++;
    }
    add(value) {
        let node = {
            value: +value,
            left: undefined,
            right: undefined,
        }
        if (this.root == null) {
            this.root = node
            return true;
        } else {
           let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === undefined) {
                        current.left = node;
                        this.n=false;
                    
                        break;
                    } else{
                        current = current.left;
                        this.n=false;
                    }
                } else if (value > current.value) {
                    if (current.right === undefined) {
                        current.right = node;
                        this.n=true;
                        break;
                    } else
                        current = current.right;
                        this.n=true;
                } else {
                    break;
                }
            }
          return current.value;
        }
    }

    getN(){
        return this.n;
    }

    getCount(){
        return BinaryTree.count;
    }
    setCount(){
        BinaryTree.count--;
    }
}
BinaryTree.count=0