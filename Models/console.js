export class Console{
    startButton;
    clearButton;
    clearButtonEnabled;
    startButtonEnabled;

    constructor(){
        this.startButton = document.getElementById("button-start");
        this.clearButton = document.getElementById("button-clear")
        this.clearButtonEnabled, this.startButtonEnabled = true;
    }

    addEventStartButton(){

    }

    addEventClearButton(){

    }

    disableButtons(){
        this.startButton.disabled = true;
        this.clearButton.disabled = true;
        this.clearButtonEnabled, this.startButtonEnabled = false;
    }

    enableButtons(){
        this.startButton.disabled = false;
        this.clearButton.disabled = false;
        this.clearButtonEnabled, this.startButtonEnabled = true;
    }

    disableStartButton(){

    }

    enableStartButton(){

    }

    disableClearButton(){

    }

    startClearButton(){

    }

}