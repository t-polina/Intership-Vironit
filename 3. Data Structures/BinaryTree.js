class BinaryTree {
    constructor() {
        this.root = null;
    }
    add(value) {
        let node = {
            value: value,
            left: undefined,
            right: undefined
        }
        // let current={};
        if (this.root == null) {
            this.root = node
            console.log(this.root);
        } else {
           let current = this.root;

            while (true) {
                if (value < current.value) {
                    if (current.left === undefined) {
                        current.left = node;
                        break;
                    } else
                        current = current.left;
                } else if (value > current.value) {
                    if (current.right === undefined) {
                        current.right = node;
                        break;
                    } else
                        current = current.right;
                } else {
                    break;
                }
            }
           console.log(current);
        }
        // console.log(current);
    }
    find(value) {
        let found = false;
        let current = this.root;
        while (!found && current) {
            if (value < current.left) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found;
    }
}
let binaryTree = new BinaryTree()
binaryTree.add(10);
binaryTree.add(5);
binaryTree.add(17);
binaryTree.add(2);
binaryTree.add(8);
binaryTree.add(20);
binaryTree.find(2);
binaryTree.find(100)
