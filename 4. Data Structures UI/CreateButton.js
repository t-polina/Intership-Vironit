// const createButton=(function(documentObj){
    class CreateButton{
        constructor(text, parentNode){
            this.button=document.createElement('button');
            this.button.className ='button-which-structure';
            this.button.innerText=text;
            parentNode.append(this.button);
            return this.button
        }
    }
//     return CreateButton;
// })(document);
