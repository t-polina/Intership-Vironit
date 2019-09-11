const ViewWhichStructure = document.getElementById('view-which-structure');
let createStackBtton = new CreateButton('Create Stack', ViewWhichStructure);
let createQueueBtton = new CreateButton('Create Queue', ViewWhichStructure);
let createTreeBtton = new CreateButton('Create Binary Tree', ViewWhichStructure);

createStackBtton.onclick = function () {
    let stack = new Stack();
    let structureModelUI = new StructureModelUI(`Stack ${stack.getCount()}`, ViewWhichStructure)
    let pushButton = new CreateButton('Добавить', structureModelUI.getView());
    let popButton = new CreateButton('Удалить', structureModelUI.getView());
    let close = new CreateButton('Х', structureModelUI.getView());
    let ui = new UI(structureModelUI.getView());
    let n = ui.getUICount()

    pushButton.onclick = function () {
        ui.uiPush(stack.push(structureModelUI.getValue()), structureModelUI.getView());
        structureModelUI.setInput(" ");
    };
    popButton.onclick = function () {
        stack.pop();
        ui.uiPop('last', n);
    };
    close.onclick = function () {
        structureModelUI.getView().remove();
        stack.setCount();
    };
}
createQueueBtton.onclick = function () {
    let queue = new Queue();
    let structureModelUI = new StructureModelUI(`Queue ${queue.getCount()}`, ViewWhichStructure)
    let pushButton = new CreateButton('Добавить', structureModelUI.getView());
    let popButton = new CreateButton('Удалить', structureModelUI.getView());
    let close = new CreateButton('Х', structureModelUI.getView());
    let ui = new UI(structureModelUI.getView());
    let n = ui.getUICount()
    pushButton.onclick = function () {
        ui.uiPush(queue.push(structureModelUI.getValue()), structureModelUI.getView());
        structureModelUI.setInput(" ");
    };
    popButton.onclick = function () {
        queue.pop();
        ui.uiPop('first', n);
    };
    close.onclick = function () {
        structureModelUI.getView().remove();
        queue.setCount();
    }
};
createTreeBtton.onclick = function () {
    let tree = new BinaryTree();
    let structureModelUI = new StructureModelUI(`Binary tree ${tree.getCount()}`, ViewWhichStructure);
    let pushButton = new CreateButton('Добавить', structureModelUI.getView());
    
    let close = new CreateButton('Х', structureModelUI.getView());
    let treeUI = new BinatyTreeUI(structureModelUI.getView());
    pushButton.onclick = function () {
    treeUI.createNodeTree(tree.add(structureModelUI.getValue()), structureModelUI.getValue(), tree.getN());
    structureModelUI.setInput("");
    }
    close.onclick = function () {
        structureModelUI.getView().remove();
        tree.setCount();
    }

};
