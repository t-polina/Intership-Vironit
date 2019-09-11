class UI{
    constructor(parentNode){
        UI.count++;
        this.structure=document.createElement('div');
        this.structure.className=`structure${UI.count}`;
        parentNode.append(this.structure);
    }
    uiPush(value){
        this.structureNode=document.createElement('div');
        this.structureNode.innerText=value;
        this.structure.append(this.structureNode)
    }
    uiPop(text,count){
         document.querySelector(`.structure${count}>div:${text}-child`).remove();
    }
    getUICount(){
        return UI.count;
    }
}
UI.count=0;