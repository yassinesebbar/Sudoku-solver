export default class Console{

    consoleWrapperDivElement;
    startButtonElement;
    clearButtonElement;

    clearButtonEnabled = true;
    startButtonEnabled = true;

    constructor(){
        this.createDomElements();
    }

    createDomElements(){
        this.startButtonElement = document.createElement('button');
        this.startButtonElement.innerText= "Start";

        this.clearButtonElement = document.createElement('button');
        this.clearButtonElement.innerText = "Clear";

        this.consoleWrapperDivElement = document.createElement("div");
        this.consoleWrapperDivElement.id = "Console";

        this.consoleWrapperDivElement.appendChild(this.startButtonElement);
        this.consoleWrapperDivElement.appendChild(this.clearButtonElement);
    }

    getConsoleDomElement(){
        return this.consoleWrapperDivElement;
    }

    disableButtons(){
        this.startButtonElement.disabled = true;
        this.clearButtonElement.disabled = true;
        this.clearButtonEnabled = this.startButtonEnabled = false;
    }

    enableButtons(){
        this.startButtonElement.disabled = false;
        this.clearButtonElement.disabled = false;
        this.clearButtonEnabled = this.startButtonEnabled = true;
    }

    enableClearButton(){
        this.startButtonElement.disabled = false;
        this.clearButtonEnabled = true;
    }

}