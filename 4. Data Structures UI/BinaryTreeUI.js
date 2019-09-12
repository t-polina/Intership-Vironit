class BinatyTreeUI {
    constructor(parent) {
        this.parent=parent;
        this.treeView = document.createElement('div');
        this.treeView.className = 'tree-view';
         this.parent.append(this.treeView);
    }
    createNodeTree(root, value, leftOrRight) {
        if (root == value) { // Please use strict eq
            return 0;
        }
        else if (root === true) {
            this.rootView = document.createElement('div');
            this.rootView.className = `root ${String(value)}`;
            this.rootView.id = `${String(value)}`; //String constructor unnecessary with string templates
            this.rootView.innerText = value;
            this.treeView.append(this.rootView);
        }
        else {
            this.rootView = document.createElement('div');           
            this.rootView.id = `${String(value)}`; //String constructor unnecessary with string templates
            this.rootView.innerText = value;
         
            if(!leftOrRight){
                this.rootView.className = `left`; // Please use simple single quotes for simple strings
                document.getElementById(`${String(root)}`).append(this.rootView); //String constructor unnecessary with string templates
            }
            else{
                this.rootView.className = `right`; // Please use simple single quotes for simple strings
                document.getElementById(`${String(root)}`).append(this.rootView); //String constructor unnecessary with string templates
            }  
        }

    }
}
