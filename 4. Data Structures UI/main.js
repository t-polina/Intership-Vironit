const ViewWhichStructure = document.getElementById('view-which-structure');
let createStackBtton =new CreateButton('Create Stack',ViewWhichStructure);
let createQueueBtton =new CreateButton('Create Queue',ViewWhichStructure);
let createTreeBtton =new CreateButton('Create Binary Tree',ViewWhichStructure);
createStackBtton.onclick=function(){
     console.log(1);
 };
 createQueueBtton.onclick=function(){
    console.log(2);
};
createTreeBtton.onclick=function(){
    console.log(3);
};