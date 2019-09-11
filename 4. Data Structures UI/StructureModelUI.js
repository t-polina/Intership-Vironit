class StructureModelUI{
    constructor(text, parentNode){
        this.structureView=document.createElement('div');
        this.structureNumder=document.createElement('span');
        this.inputValue=document.createElement('input');
        this.structureNumder.innerText=text;
        this.structureView.append(this.structureNumder);
        this.structureView.append(this.inputValue);
        parentNode.append(this.structureView);
    }
    getView(){
        return this.structureView;
    }
    getValue(){
         return this.inputValue.value;
    }
    
    setInput(text){
        this.inputValue.value=text;
    }
}

    